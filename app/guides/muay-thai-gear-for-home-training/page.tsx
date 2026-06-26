import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muay Thai Gear for Home Training 2026 — Complete Setup Guide",
  description: "Everything you need to train Muay Thai at home. We cover the essential gear, what to skip, budget options, and how to set up a home training space.",
};

const kit = [
  {
    item: "Heavy Bag Gloves",
    essential: true,
    budget: "$45–$89",
    rec: "Venum Contender ($45) for budget, Fairtex BGV1 ($89) for quality",
    note: "For home bag work you don't need 16oz sparring gloves — 12–14oz is fine.",
    amazonUrl: "https://www.amazon.com/Venum-Contender-Boxing-Gloves/dp/B0GJ1263SJ?tag=muaythaigea05-20",
  },
  {
    item: "Hand Wraps",
    essential: true,
    budget: "$10–$28",
    rec: "Fairtex cotton wraps ($12) or Venum Gel wraps ($28) for weak wrists",
    note: "Always wrap before putting on gloves. Non-negotiable.",
    amazonUrl: "https://www.amazon.com/Fairtex-Elastic-Cotton-Handwraps-HW2/dp/B0793QXLX6?tag=muaythaigea05-20",
  },
  {
    item: "Heavy Bag",
    essential: true,
    budget: "$80–$200",
    rec: "100–150lb bag for Muay Thai kicks. Fill-yourself bags save on shipping.",
    note: "Most important piece of home equipment. Get the heaviest bag you can hang safely.",
    amazonUrl: "https://www.amazon.com/s?k=muay+thai+heavy+bag&tag=muaythaigea05-20",
  },
  {
    item: "Shin Guards",
    essential: false,
    budget: "$40–$89",
    rec: "Only needed if sparring. For solo home training you can skip these.",
    note: "If you ever have a training partner come over, then yes — get shin guards.",
    amazonUrl: "https://www.amazon.com/dp/B07FF6GKTG?tag=muaythaigea05-20",
  },
  {
    item: "Thai Pads",
    essential: false,
    budget: "$55–$149",
    rec: "Only buy if you have a regular training partner. Useless solo.",
    note: "Great investment if you have a partner. Skip if training alone.",
    amazonUrl: "https://www.amazon.com/MMABLAST-FAIRTEX-SUPERIOR-KICKBOXING-PADS-KPLS2/dp/B00PM9XRZ4?tag=muaythaigea05-20",
  },
  {
    item: "Muay Thai Shorts",
    essential: false,
    budget: "$35–$45",
    rec: "Venum Giant Shorts ($35) — traditional cut for full kicking range of motion",
    note: "You can train in regular shorts but Thai shorts give much better mobility.",
    amazonUrl: "https://www.amazon.com/Venum-Giant-Muay-Thai-Shorts/dp/B076V4T7RS?tag=muaythaigea05-20",
  },
];

export default function MuayThaiGearForHomeTraining() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Muay Thai Gear for Home Training (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Training Muay Thai at home is completely viable — you just need the right setup. This guide covers exactly what to buy, what to skip, and how to get started without wasting money.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Want a personalized home training kit?</p>
          <p className="text-zinc-400 text-sm mb-3">Our quiz asks whether you train solo or with a partner, your budget, and experience level to build you the right kit.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Build My Home Kit →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What You Need (and What You Don't)</h2>
        <div className="space-y-4 mb-12">
          {kit.map((item) => (
            <div key={item.item} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{item.item}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.essential ? "bg-red-900 text-red-300" : "bg-zinc-800 text-zinc-400"}`}>
                    {item.essential ? "Essential" : "Optional"}
                  </span>
                </div>
                <span className="text-sm font-semibold text-zinc-400">{item.budget}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-1">{item.rec}</p>
              <p className="text-zinc-600 text-xs mb-3">{item.note}</p>
              <a href={item.amazonUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                View on Amazon →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Budget Breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-zinc-300 border-b border-zinc-800 pb-2">
              <span>Starter Kit (gloves + wraps + bag)</span>
              <span className="text-white font-semibold">~$135–$300</span>
            </div>
            <div className="flex justify-between text-zinc-300 border-b border-zinc-800 pb-2">
              <span>Full Solo Setup (add shorts)</span>
              <span className="text-white font-semibold">~$170–$340</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Partner Training (add shin guards + Thai pads)</span>
              <span className="text-white font-semibold">~$265–$580</span>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Get your personalized home kit</h3>
          <p className="text-zinc-400 text-sm mb-4">Answer a few quick questions and we'll build you a complete gear list with specific products matched to your budget and training style.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Build My Kit →
          </Link>
        </div>
      </div>
    </main>
  );
}
