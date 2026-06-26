import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Muay Thai Gloves for Beginners 2026 — Complete Guide",
  description: "Find the best Muay Thai gloves for beginners in 2026. We compare top brands by price, padding, wrist support and training style to help you choose.",
};

const gloves = [
  {
    name: "Venum Contender Boxing Gloves",
    price: "$45",
    best: "Best Budget Pick",
    description: "The go-to starter glove. Affordable, durable synthetic leather with solid wrist support. Perfect for bag work and light pad sessions.",
    pros: ["Affordable", "Easy velcro closure", "Good ventilation"],
    cons: ["Not ideal for heavy sparring"],
    amazonUrl: "https://www.amazon.com/Venum-Contender-Boxing-Gloves/dp/B0GJ1263SJ?tag=muaythaigea05-20",
  },
  {
    name: "Fairtex BGV1 Muay Thai Gloves",
    price: "$89",
    best: "Best Overall",
    description: "The most trusted glove in Muay Thai gyms worldwide. Genuine leather, excellent wrist lock, and built to last years of hard training.",
    pros: ["Genuine leather", "Outstanding wrist support", "Used by pros"],
    cons: ["Higher price point", "Needs break-in period"],
    amazonUrl: "https://www.amazon.com/Fairtex-Training-Sparring-Martial-Absorbent/dp/B0DPWN63TZ?tag=muaythaigea05-20",
  },
  {
    name: "Twins Special BGVL3 Gloves",
    price: "$95",
    best: "Best for Sparring",
    description: "Premium Thai-made gloves with extra padding for safe sparring. Favored by fighters training in Thailand.",
    pros: ["Extra padding", "Great for sparring", "Genuine leather"],
    cons: ["Pricier", "Runs slightly small"],
    amazonUrl: "https://www.amazon.com/Twins-Special-Universal-Purposes-Training/dp/B00PYIBRAA?tag=muaythaigea05-20",
  },
  {
    name: "Hayabusa T3 Boxing Gloves",
    price: "$149",
    best: "Best for Weak Wrists",
    description: "Best-in-class wrist support with a dual-closure system. If you have wrist injuries or weak wrists, these are worth every penny.",
    pros: ["Exceptional wrist support", "5-layer foam padding", "Premium finish"],
    cons: ["Expensive", "May be overkill for pure beginners"],
    amazonUrl: "https://www.amazon.com/Hayabusa-Boxing-Gloves-Men-Women/dp/B075G2VHPT?tag=muaythaigea05-20",
  },
];

export default function BestMuayThaiGlovesForBeginners() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Muay Thai Gloves for Beginners (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Choosing your first pair of Muay Thai gloves is confusing — wrong size, wrong padding, wrong wrist support and you're either injured or wasting money. This guide cuts through the noise.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Not sure which gloves to get?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer 5 questions and get a personalized recommendation based on your training style and budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">What oz gloves should a beginner get?</h2>
        <p className="text-zinc-400 mb-6">
          For most beginners, <strong className="text-white">12oz–16oz</strong> is the right range. Lighter fighters (under 130 lbs) can go 12oz. Most people should start at 14oz for bag work and 16oz for sparring. Heavier fighters (185+) should go straight to 16oz.
        </p>

        <h2 className="text-2xl font-bold text-white mb-6">Top Picks</h2>
        <div className="space-y-6 mb-12">
          {gloves.map((g) => (
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
          <h3 className="text-xl font-bold text-white mb-2">Still not sure?</h3>
          <p className="text-zinc-400 text-sm mb-4">Take our 2-minute quiz and get a recommendation matched to your exact training style, wrist strength, and budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Gloves →
          </Link>
        </div>
      </div>
    </main>
  );
}
