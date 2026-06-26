import { products, Product } from "@/data/products";
import { QuizAnswer } from "@/data/quiz";

function scoreGlove(p: Product, a: QuizAnswer): number {
  let score = 0;
  if (p.tags.includes(a.experience)) score += 3;
  if (a.trainingFocus !== "all-around" && p.tags.includes(a.trainingFocus)) score += 2;
  if (a.weakWrists && p.tags.includes("wrist-support")) score += 3;
  if (a.glovePadding === "thick" && p.tags.includes("thick-padding")) score += 2;
  if (a.sweatyHands && p.tags.includes("ventilated")) score += 2;
  if (p.tags.includes(a.gloveClosure)) score += 2;

  const budgetMatch =
    (a.glovesBudget === "under60" && p.price < 60) ||
    (a.glovesBudget === "60-120" && p.price >= 60 && p.price <= 120) ||
    (a.glovesBudget === "120plus" && p.price > 120);
  if (budgetMatch) score += 4;

  return score;
}

function scoreShinGuard(p: Product, a: QuizAnswer): number {
  let score = 0;
  if (p.tags.includes(a.experience)) score += 2;
  if (a.shinAnkleCoverage && p.tags.includes("ankle-coverage")) score += 3;
  if (a.shinKneeCoverage && p.tags.includes("knee-coverage")) score += 3;
  if (p.tags.includes(a.shinType)) score += 2;

  const budgetMatch =
    (a.shinBudget === "under40" && p.price < 40) ||
    (a.shinBudget === "40-80" && p.price >= 40 && p.price <= 80) ||
    (a.shinBudget === "80plus" && p.price > 80);
  if (budgetMatch) score += 4;

  return score;
}

function scoreThaiPad(p: Product, a: QuizAnswer): number {
  let score = 0;
  if (a.padMaterial === "leather" && p.tags.includes("leather")) score += 3;
  if (a.padMaterial === "synthetic" && p.tags.includes("synthetic")) score += 3;
  if (p.tags.includes(a.padShape)) score += 2;
  if (a.holderExperience === "beginner" && p.tags.includes("beginner-holder")) score += 3;
  if (a.holderExperience === "experienced" && p.tags.includes("experienced-holder")) score += 3;
  if (a.holderHandSize === "small" && p.tags.includes("small-hands")) score += 2;
  return score;
}

export interface Recommendation {
  category: string;
  product: Product;
  reason: string;
}

export function getRecommendations(answers: QuizAnswer): Recommendation[] {
  const recs: Recommendation[] = [];

  // Gloves — always recommend
  const gloves = products
    .filter((p) => p.category === "gloves")
    .map((p) => ({ p, score: scoreGlove(p, answers) }))
    .sort((a, b) => b.score - a.score);

  if (gloves.length > 0) {
    const top = gloves[0].p;
    const reasons: string[] = [];
    if (answers.weakWrists) reasons.push("strong wrist support");
    if (answers.glovePadding === "thick") reasons.push("extra padding");
    if (answers.sweatyHands) reasons.push("ventilation");
    recs.push({
      category: "Gloves",
      product: top,
      reason: reasons.length
        ? `Chosen for: ${reasons.join(", ")}`
        : `Great match for ${answers.experience} ${answers.trainingFocus} training`,
    });
  }

  // Shin Guards
  if (answers.needShinGuards) {
    const shins = products
      .filter((p) => p.category === "shin_guards")
      .map((p) => ({ p, score: scoreShinGuard(p, answers) }))
      .sort((a, b) => b.score - a.score);

    if (shins.length > 0) {
      const top = shins[0].p;
      const reasons: string[] = [];
      if (answers.shinAnkleCoverage) reasons.push("ankle coverage");
      if (answers.shinKneeCoverage) reasons.push("knee coverage");
      reasons.push(answers.shinType === "slip-on" ? "easy slip-on" : "secure strap-on");
      recs.push({
        category: "Shin Guards",
        product: top,
        reason: `Chosen for: ${reasons.join(", ")}`,
      });
    }
  }

  // Thai Pads
  if (answers.needThaiPads) {
    const pads = products
      .filter((p) => p.category === "thai_pads")
      .map((p) => ({ p, score: scoreThaiPad(p, answers) }))
      .sort((a, b) => b.score - a.score);

    if (pads.length > 0) {
      const top = pads[0].p;
      recs.push({
        category: "Thai Pads",
        product: top,
        reason: `${answers.padMaterial === "leather" ? "Genuine leather" : "Synthetic"}, ${answers.padShape} shape — ${answers.holderExperience === "beginner" ? "beginner-friendly" : "pro-grade"}`,
      });
    }
  }

  // Hand Wraps
  if (answers.needHandWraps) {
    const wrap = answers.weakWrists
      ? products.find((p) => p.id === "venum-wraps")
      : products.find((p) => p.id === "fairtex-wraps");
    if (wrap) {
      recs.push({
        category: "Hand Wraps",
        product: wrap,
        reason: answers.weakWrists
          ? "Gel inner gloves provide extra wrist cushion"
          : "Standard 180-inch cotton wraps — reliable and affordable",
      });
    }
  }

  // Shorts
  if (answers.needShorts) {
    const shorts =
      answers.experience === "beginner"
        ? products.find((p) => p.id === "venum-shorts")
        : products.find((p) => p.id === "fairtex-shorts");
    if (shorts) {
      recs.push({
        category: "Shorts",
        product: shorts,
        reason: "Traditional Muay Thai cut for full range of motion",
      });
    }
  }

  return recs;
}

export function getTotalPrice(recs: Recommendation[]): number {
  return recs.reduce((sum, r) => sum + r.product.price, 0);
}
