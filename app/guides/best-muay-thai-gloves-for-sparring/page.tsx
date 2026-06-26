import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Muay Thai Gloves for Sparring 2026 — Top Picks",
  description: "The best Muay Thai gloves for sparring in 2026. We rank top picks by padding, wrist protection, and durability so you and your partner stay safe.",
};

const gloves = [
  {
    name: "Twins Special BGVL3",
    price: "$95",
    best: "Best Overall Sparring Glove",
    oz: "16oz recommended",
    description: "The gold standard for sparring. Extra padding absorbs impact well, protecting both you and your partner. Made in Thailand from genuine leather.",
    pros: ["Max padding for sparring", "Genuine leather durability", "Trusted in Thai gyms worldwide"],
    cons: ["Bulkier in clinch", "Slightly looser wrist than Fairtex"],
    amazonUrl: "https://www.amazon.com/Twins-Special-Universal-Purposes-Training/dp/B00PYIBRAA?tag=muaythaigea05-20",
  },
  {
    name: "Fairtex BGV14 Super Sparring Gloves",
    price: "$119",
    best: "Best for Hard Sparring",
    oz: "16oz recommended",
    description: "Designed specifically for sparring with extra-thick padding and an excellent wrist lock. If you spar hard and regularly, these are worth the investment.",
    pros: ["Extra thick padding", "Excellent wrist lock system", "Microfibre — easy to clean"],
    cons: ["Higher price", "Microfibre not as premium as leather"],
    amazonUrl: "https://www.amazon.com/Fairtex-Boxing-Gloves-BGV14-Black/dp/B07L7PQCDF?tag=muaythaigea05-20",
  },
  {
    name: "Hayabusa T3 Boxing Gloves",
    price: "$149",
    best: "Best for Injured Wrists",
    oz: "16oz recommended",
    description: "Dual-closure system gives unmatched wrist support. If you have weak or previously injured wrists and need to keep sparring safely, these are the best option.",
    pros: ["Best-in-class wrist support", "5-layer foam padding", "Dual closure system"],
    cons: ["Most expensive on this list", "Overkill for light sparring"],
    amazonUrl: "https://www.amazon.com/Hayabusa-Boxing-Gloves-Men-Women/dp/B075G2VHPT?tag=muaythaigea05-20",
  },
  {
    name: "Fairtex BGV1",
    price: "$89",
    best: "Best All-Rounder",
    oz: "14–16oz",
    description: "Not a dedicated sparring glove but handles sparring well. Great if you want one glove for everything — bag work, pads, and light to moderate sparring.",
    pros: ["Versatile", "Great wrist support", "Most popular glove in Muay Thai"],
    cons: ["Less padding than dedicated sparring gloves", "Not ideal for very hard sparring"],
    amazonUrl: "https://www.amazon.com/Fairtex-Training-Sparring-Martial-Absorbent/dp/B0DPWN63TZ?tag=muaythaigea05-20",
  },
];

export default function BestMuayThaiGlovesForSparring() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Best Muay Thai Gloves for Sparring (2026)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Sparring gloves need more padding than bag gloves — for your protection and your partner's. Using the wrong gloves in sparring is how people get hurt. Here's what to use.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Want a personalized sparring glove recommendation?</p>
          <p className="text-zinc-400 text-sm mb-3">Answer a few questions about your weight, wrist strength, and sparring intensity and we'll match you with the right glove.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-10">
          <h2 className="text-lg font-bold text-white mb-3">Quick Rule: What oz for sparring?</h2>
          <div className="space-y-2 text-sm text-zinc-300">
            <p>→ Under 130 lbs → <strong className="text-white">14oz</strong></p>
            <p>→ 130–185 lbs → <strong className="text-white">16oz</strong></p>
            <p>→ 185+ lbs → <strong className="text-white">16–18oz</strong></p>
            <p className="text-zinc-500 mt-2 text-xs">Always check your gym's rules — most require 16oz minimum for sparring.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Top Sparring Gloves</h2>
        <div className="space-y-6 mb-12">
          {gloves.map((g) => (
            <div key={g.name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-widest">{g.best}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{g.name}</h3>
                  <span className="text-xs text-zinc-500">{g.oz}</span>
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
          <p className="text-zinc-400 text-sm mb-4">Take our quiz — we ask about your sparring intensity, wrist strength, and budget to find your perfect match.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Sparring Gloves →
          </Link>
        </div>
      </div>
    </main>
  );
}
