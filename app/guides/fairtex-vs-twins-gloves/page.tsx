import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fairtex vs Twins Gloves 2026 — Which Should You Buy?",
  description: "Fairtex BGV1 vs Twins Special BGVL3 — the ultimate comparison. We break down padding, wrist support, durability, price and who each glove is best for.",
};

export default function FairtexVsTwins() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Fairtex vs Twins Gloves (2026) — Which Should You Buy?
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          These are the two most iconic Muay Thai glove brands in the world. Both are made in Thailand, both are used by pros — but they feel completely different. Here's how to choose.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Not sure which is right for you?</p>
          <p className="text-zinc-400 text-sm mb-3">Our quiz factors in your training style, wrist strength, and budget to give you a personalized recommendation.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="bg-zinc-900 border border-red-800 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-white mb-1">Fairtex BGV1</h2>
            <p className="text-red-400 text-sm font-semibold mb-3">~$89</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>✓ Tighter wrist lock</li>
              <li>✓ Slimmer profile</li>
              <li>✓ Better for clinch work</li>
              <li>✓ Slightly more feedback</li>
              <li>✗ Less padding than Twins</li>
              <li>✗ Runs small — size up</li>
            </ul>
            <a href="https://www.amazon.com/Fairtex-Training-Sparring-Martial-Absorbent/dp/B0DPWN63TZ?tag=muaythaigea05-20"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 block text-center bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              View on Amazon →
            </a>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-white mb-1">Twins BGVL3</h2>
            <p className="text-zinc-400 text-sm font-semibold mb-3">~$95</p>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>✓ More padding</li>
              <li>✓ Better for heavy sparring</li>
              <li>✓ Slightly roomier fit</li>
              <li>✓ Slightly softer leather</li>
              <li>✗ Looser wrist feel</li>
              <li>✗ Bulkier in clinch</li>
            </ul>
            <a href="https://www.amazon.com/Twins-Special-Universal-Purposes-Training/dp/B00PYIBRAA?tag=muaythaigea05-20"
              target="_blank" rel="noopener noreferrer"
              className="mt-4 block text-center bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              View on Amazon →
            </a>
          </div>
        </div>

        {[
          {
            title: "Wrist Support",
            winner: "Fairtex",
            body: "Fairtex has a tighter, more locked-in wrist cuff. If you have weak wrists or prior injuries, Fairtex BGV1 is the better choice. Twins feels slightly looser around the wrist but still solid.",
          },
          {
            title: "Padding & Protection",
            winner: "Twins",
            body: "Twins BGVL3 has noticeably more padding, making it better for heavy sparring where you're absorbing shots. Fairtex is leaner — great for pad work and bag work, but Twins wins for protection.",
          },
          {
            title: "Durability",
            winner: "Tie",
            body: "Both are genuine Thai leather and will last years with proper care. Air them out after training, don't leave them in your bag, and both brands will hold up for 3-5 years of regular training.",
          },
          {
            title: "Fit & Sizing",
            winner: "Twins",
            body: "Fairtex runs small — most people need to size up. Twins fits more true to size and is slightly roomier, which some fighters prefer. If you have wider hands, go Twins.",
          },
          {
            title: "Clinch Work",
            winner: "Fairtex",
            body: "Fairtex's slimmer profile makes it better for Muay Thai clinch work — grabbing, controlling, and fighting in the pocket. Twins' extra bulk can get in the way.",
          },
          {
            title: "Price",
            winner: "Fairtex",
            body: "Fairtex BGV1 is typically ~$6 cheaper than Twins BGVL3. Not a huge difference but worth noting if you're on a tighter budget.",
          },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl font-bold text-white">{section.title}</h2>
              <span className="text-xs font-semibold bg-red-900 text-red-300 px-2 py-1 rounded-full">
                Winner: {section.winner}
              </span>
            </div>
            <p className="text-zinc-400">{section.body}</p>
          </div>
        ))}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">The Verdict</h2>
          <div className="space-y-3 text-sm">
            <p className="text-zinc-300">→ <strong className="text-white">Get Fairtex BGV1</strong> if you prioritize wrist support, do a lot of clinch work, or want slightly more feedback on your strikes.</p>
            <p className="text-zinc-300">→ <strong className="text-white">Get Twins BGVL3</strong> if you spar heavy, have wider hands, or want maximum padding protection.</p>
            <p className="text-zinc-300">→ <strong className="text-white">Can't decide?</strong> Fairtex BGV1 is the more versatile all-rounder and the most popular choice in gyms worldwide.</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Still not sure?</h3>
          <p className="text-zinc-400 text-sm mb-4">Take our quiz — we factor in your wrist strength, training style, and budget to give you a personalized pick.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Gloves →
          </Link>
        </div>
      </div>
    </main>
  );
}
