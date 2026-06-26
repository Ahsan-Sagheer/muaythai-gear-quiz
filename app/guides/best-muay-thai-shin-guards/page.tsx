import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Muay Thai Shin Guards 2026 — Buyer's Guide",
  description: "The best Muay Thai shin guards for sparring, bag work and beginners. We compare slip-on vs strap-on, ankle coverage, knee coverage and top brands.",
};

const shinGuards = [
  {
    name: "Ringside Kickboxing Shin Guards",
    price: "$40",
    best: "Best Budget",
    description: "No-frills slip-on shin guards that get the job done for beginners doing bag work and light training.",
    pros: ["Very affordable", "Easy slip-on", "Lightweight"],
    cons: ["Basic protection only", "Not for heavy sparring"],
    amazonUrl: "https://www.amazon.com/dp/B07FF6GKTG?tag=muaythaigea05-20",
  },
  {
    name: "Venum Elite Standup Shin Guards",
    price: "$65",
    best: "Best Beginner Sparring",
    description: "Comfortable slip-on design with good ankle coverage. Great step up from budget guards for regular sparring.",
    pros: ["Good ankle coverage", "Comfortable fit", "Slip-on convenience"],
    cons: ["Synthetic leather", "Less durable than leather options"],
    amazonUrl: "https://www.amazon.com/Venum-Light-Skintex-Leather-Kick/dp/B017AZOD32?tag=muaythaigea05-20",
  },
  {
    name: "Twins Special Shin Guards",
    price: "$79",
    best: "Best Mid-Range",
    description: "Full coverage strap-on guards extending to knee and ankle. Trusted by fighters training in Thai gyms.",
    pros: ["Knee + ankle coverage", "Secure strap system", "Genuine leather"],
    cons: ["Takes longer to put on", "Higher price"],
    amazonUrl: "https://www.amazon.com/Twins-Special-Black-Red-Training-Kickboxing/dp/B07N12J4H1?tag=muaythaigea05-20",
  },
  {
    name: "Fairtex SP5 Shin Guards",
    price: "$89",
    best: "Best Overall",
    description: "Pro-grade shin guards with excellent ankle coverage and a secure fit. The standard in serious Muay Thai gyms worldwide.",
    pros: ["Premium leather", "Excellent ankle coverage", "Secure strap-on fit"],
    cons: ["Premium price", "Needs break-in period"],
    amazonUrl: "https://www.amazon.com/Fairtex-Traditional-Muay-Thai-Guards/dp/B01EVVKOG8?tag=muaythaigea05-20",
  },
];

export default function BestMuayThaiShinGuards() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Muay Thai Shin Guards (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Shin guards are non-negotiable for sparring. Get the wrong ones and you're either constantly adjusting them mid-round or taking unnecessary damage. Here's what to look for and what to buy.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Want a personalized recommendation?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer a few questions about your training and we'll match you with the right shin guards for your needs and budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Slip-on vs Strap-on — Which Should You Get?</h2>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="font-bold text-white mb-2">Slip-On</p>
            <p className="text-zinc-400 text-sm">Faster to put on and take off. Great for drilling and class training where you switch frequently. Less secure during heavy sparring.</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="font-bold text-white mb-2">Strap-On</p>
            <p className="text-zinc-400 text-sm">More secure fit during hard sparring. Better protection. Takes longer to put on. Recommended for regular sparring partners.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Top Picks</h2>
        <div className="space-y-6 mb-12">
          {shinGuards.map((g) => (
            <div key={g.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">{g.best}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{g.name}</h3>
                </div>
                <span className="text-2xl font-bold text-white">{g.price}</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">{g.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-zinc-500 uppercase mb-2">Pros</p>
                  {g.pros.map(p => <p key={p} className="text-xs text-green-400 mb-1">✓ {p}</p>)}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase mb-2">Cons</p>
                  {g.cons.map(c => <p key={c} className="text-xs text-zinc-500 mb-1">✗ {c}</p>)}
                </div>
              </div>
              <a href={g.amazonUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
                View on Amazon →
              </a>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Not sure which to pick?</h3>
          <p className="text-zinc-400 text-sm mb-4">Take our quiz — we ask about ankle/knee coverage needs, your sparring intensity, and budget to find your perfect match.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Shin Guards →
          </Link>
        </div>
      </div>
    </main>
  );
}
