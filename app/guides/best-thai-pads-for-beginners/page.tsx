import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Thai Pads for Beginners 2026 — Top Picks & Buyer's Guide",
  description: "The best Thai pads for beginners in 2026. We compare curved vs flat, leather vs synthetic, and rank the top pads by ease of holding and durability.",
};

const pads = [
  {
    name: "Ringside Thai Pads",
    price: "$55",
    best: "Best Budget",
    description: "Compact, lightweight pads ideal for beginners learning to hold. Easy to manage and absorb kicks well for the price.",
    pros: ["Affordable", "Lightweight — easy to hold", "Good for beginners"],
    cons: ["Less durable than leather", "Not for very hard kicks"],
    amazonUrl: "https://www.amazon.com/dp/B006CV6W6M?tag=muaythaigea05-20",
  },
  {
    name: "Venum Elite Thai Pads",
    price: "$89",
    best: "Best for Beginner Holders",
    description: "Curved synthetic pads that are lighter and easier to manage than leather. Great for trainers who are new to holding pads.",
    pros: ["Curved shape catches kicks easily", "Lighter than leather", "Good shock absorption"],
    cons: ["Synthetic won't last as long as leather", "Not ideal for elite training"],
    amazonUrl: "https://www.amazon.com/Venum-Light-Skintex-Leather-Kick/dp/B017AZOD32?tag=muaythaigea05-20",
  },
  {
    name: "Twins Special KPL-12 Thai Pads",
    price: "$129",
    best: "Best Mid-Range",
    description: "Traditional curved Thai pads made in Thailand. Great balance of durability and ease of holding. Used in serious Muay Thai gyms.",
    pros: ["Genuine leather", "Curved for easy catching", "Built to last years"],
    cons: ["Heavier than synthetic", "Pricier"],
    amazonUrl: "https://www.amazon.com/Twins-Special-Black-Red-Training-Kickboxing/dp/B07N12J4H1?tag=muaythaigea05-20",
  },
  {
    name: "Fairtex KPLS2 Thai Pads",
    price: "$149",
    best: "Best Overall",
    description: "The benchmark Thai pad used in gyms across Thailand and worldwide. Genuine cowhide leather, curved design, padded straps. Built for serious training.",
    pros: ["Premium cowhide leather", "Excellent shock absorption", "Padded arm straps", "Lasts 5+ years with care"],
    cons: ["Most expensive option", "Heavier — needs stronger holder"],
    amazonUrl: "https://www.amazon.com/MMABLAST-FAIRTEX-SUPERIOR-KICKBOXING-PADS-KPLS2/dp/B00PM9XRZ4?tag=muaythaigea05-20",
  },
];

export default function BestThaiPadsForBeginners() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Thai Pads for Beginners (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Thai pads are for the person holding, not the person hitting — so the most important factor is how easy they are to hold and catch with. Here's what beginners should look for.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Not sure which Thai pads to get?</p>
          <p className="text-zinc-400 text-sm mb-3">Our quiz asks about the holder's experience, hand size, and your budget to find the right match.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="font-bold text-white mb-2">Curved Pads</p>
            <p className="text-zinc-400 text-sm">Easier to catch kicks — the curve guides the kick into the pad. Best for beginners and anyone learning to hold.</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
            <p className="font-bold text-white mb-2">Flat Pads</p>
            <p className="text-zinc-400 text-sm">Traditional style. Requires more skill to hold correctly but gives a more authentic Muay Thai feel. Better for experienced holders.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Top Picks</h2>
        <div className="space-y-6 mb-12">
          {pads.map((g) => (
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
          <h3 className="text-xl font-bold text-white mb-2">Still deciding?</h3>
          <p className="text-zinc-400 text-sm mb-4">Take our quiz and get a Thai pad recommendation based on the holder's experience, hand size, and your budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Thai Pads →
          </Link>
        </div>
      </div>
    </main>
  );
}
