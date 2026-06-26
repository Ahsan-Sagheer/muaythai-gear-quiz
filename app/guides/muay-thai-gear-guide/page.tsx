import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Muay Thai Gear Guide 2026 — Everything You Need",
  description: "The complete Muay Thai gear guide for beginners and intermediate fighters. Gloves, shin guards, Thai pads, hand wraps, shorts — what to buy and why.",
};

export default function MuayThaiGearGuide() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Complete Muay Thai Gear Guide (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Starting Muay Thai and not sure what gear you need? This guide covers everything — what to buy first, what to skip, and how much to spend at each level.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Want us to pick your kit for you?</p>
          <p className="text-zinc-400 text-sm mb-3">Our free quiz matches gear to your training style, budget, and physical needs in 2 minutes.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        {[
          {
            title: "1. Gloves",
            priority: "Essential",
            description: "Your first and most important purchase. Muay Thai gloves are used for bag work, pad work, and sparring. Look for genuine leather if your budget allows — it lasts much longer than synthetic.",
            tips: [
              "Beginners: 12–14oz for bag work, 16oz for sparring",
              "Velcro closure is easier than lace-up for solo training",
              "Weak wrists? Prioritize wrist support over padding thickness",
              "Budget pick: Venum Contender (~$45) | Best overall: Fairtex BGV1 (~$89)",
            ],
            link: "/guides/best-muay-thai-gloves-for-beginners",
            linkText: "See full gloves guide →",
          },
          {
            title: "2. Hand Wraps",
            priority: "Essential",
            description: "Always wrap before putting on gloves. Hand wraps protect your knuckles, wrists, and the small bones in your hand. They're cheap — no reason to skip them.",
            tips: [
              "180-inch cotton wraps are standard",
              "Gel inner gloves are faster and great for weak wrists",
              "Buy 2–3 pairs so you always have a clean set",
              "Budget: ~$10–15 for cotton wraps",
            ],
          },
          {
            title: "3. Shin Guards",
            priority: "Essential for sparring",
            description: "If you're only doing bag work you can skip these temporarily. The moment you start sparring — you need shin guards. Don't skip them.",
            tips: [
              "Slip-on: faster, better for drilling",
              "Strap-on: more secure, better for hard sparring",
              "Look for ankle coverage if you have weak ankles",
              "Budget pick: ~$40 | Best overall: Fairtex SP5 (~$89)",
            ],
            link: "/guides/best-muay-thai-shin-guards",
            linkText: "See full shin guards guide →",
          },
          {
            title: "4. Thai Pads",
            priority: "Only if training with a partner",
            description: "Thai pads are for the person holding, not the person hitting. If you train solo or your gym provides pads, skip this. If you have a training partner, Thai pads are a game changer.",
            tips: [
              "Curved pads are easier for beginners to hold",
              "Leather pads last longer but cost more",
              "Make sure the holder's arms can manage the pad size",
              "Budget pick: ~$55 | Best leather: Fairtex KPLS2 (~$149)",
            ],
          },
          {
            title: "5. Muay Thai Shorts",
            priority: "Nice to have",
            description: "Traditional Muay Thai shorts are cut high and wide to allow full range of motion for kicks and knees. You can train in regular shorts initially but proper Muay Thai shorts make a real difference.",
            tips: [
              "Traditional cut = short length, wide waist",
              "Satin material is standard",
              "Budget: Venum Giant Shorts (~$35) | Premium: Fairtex (~$45+)",
            ],
          },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${section.priority === "Essential" ? "bg-red-900 text-red-300" : section.priority === "Essential for sparring" ? "bg-orange-900 text-orange-300" : "bg-zinc-800 text-zinc-400"}`}>
                {section.priority}
              </span>
            </div>
            <p className="text-zinc-400 mb-4">{section.description}</p>
            <ul className="space-y-2 mb-4">
              {section.tips.map(tip => (
                <li key={tip} className="flex gap-2 text-sm text-zinc-300">
                  <span className="text-red-400 mt-0.5">→</span>
                  {tip}
                </li>
              ))}
            </ul>
            {section.link && (
              <Link href={section.link} className="text-red-400 text-sm hover:text-red-300">
                {section.linkText}
              </Link>
            )}
          </div>
        ))}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Ready to build your kit?</h3>
          <p className="text-zinc-400 text-sm mb-4">Take our free quiz and get specific product recommendations matched to your training style, experience, and budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Build My Kit →
          </Link>
        </div>
      </div>
    </main>
  );
}
