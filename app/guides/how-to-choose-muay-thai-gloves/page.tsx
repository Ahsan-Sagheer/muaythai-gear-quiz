import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose Muay Thai Gloves — Complete Buying Guide 2026",
  description: "How to choose the right Muay Thai gloves for your training. We explain oz sizing, wrist support, padding, leather vs synthetic, and which brands to trust.",
};

export default function HowToChooseMuayThaiGloves() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Take the Gear Quiz</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          How to Choose Muay Thai Gloves (2026 Guide)
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          Buying your first Muay Thai gloves is confusing. Size, weight, material, closure type, wrist support — there's a lot to consider. This guide breaks it all down simply.
        </p>

        <div className="bg-red-900/20 border border-red-800 rounded-2xl p-5 mb-10">
          <p className="text-red-300 font-semibold mb-1">Skip the research — let us pick for you</p>
          <p className="text-zinc-400 text-sm mb-3">Answer 5 questions and get a glove recommendation matched to your exact situation.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">
            Take the Free Quiz →
          </Link>
        </div>

        {[
          {
            title: "Step 1: Pick the Right Oz (Weight)",
            content: (
              <div className="space-y-3 text-sm text-zinc-300">
                <p>Glove weight affects padding thickness and protection. Heavier = more padding = safer for sparring. Lighter = more feedback = better for pad work.</p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-2">
                  <p>→ <strong className="text-white">8–10oz</strong> — Competition only. Not for training.</p>
                  <p>→ <strong className="text-white">12oz</strong> — Bag work for lighter fighters (under 130 lbs)</p>
                  <p>→ <strong className="text-white">14oz</strong> — Bag work and light sparring. Most common.</p>
                  <p>→ <strong className="text-white">16oz</strong> — Standard sparring weight. Required at most gyms.</p>
                  <p>→ <strong className="text-white">18oz</strong> — Heavy sparring for larger fighters (185+ lbs)</p>
                </div>
                <p className="text-zinc-500 text-xs">If you're only buying one pair: get 14oz if you're under 160 lbs, 16oz if you're over.</p>
              </div>
            ),
          },
          {
            title: "Step 2: Leather vs Synthetic",
            content: (
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                    <p className="font-bold text-white mb-1">Genuine Leather</p>
                    <p className="text-zinc-400 text-xs">Lasts 3-5+ years. Better feel. More expensive ($80-150). Recommended for anyone training regularly.</p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                    <p className="font-bold text-white mb-1">Synthetic</p>
                    <p className="text-zinc-400 text-xs">Lasts 1-2 years. Cheaper ($30-60). Fine for beginners trying the sport out.</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Step 3: Wrist Support",
            content: (
              <div className="space-y-3 text-sm text-zinc-300">
                <p>This is the most underrated factor. A glove with poor wrist support leads to wrist sprains — especially on hooks and overhands.</p>
                <p>→ <strong className="text-white">Standard wrist cuff</strong> — Fine for most people</p>
                <p>→ <strong className="text-white">Extended wrist cuff</strong> — Better for weak wrists or anyone with prior injuries</p>
                <p>→ <strong className="text-white">Dual closure (e.g. Hayabusa T3)</strong> — Maximum support, great for injury recovery</p>
                <p className="text-zinc-500">If your wrists have ever been injured, prioritize wrist support above everything else.</p>
              </div>
            ),
          },
          {
            title: "Step 4: Velcro vs Lace-Up",
            content: (
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                    <p className="font-bold text-white mb-1">Velcro (Hook & Loop)</p>
                    <p className="text-zinc-400 text-xs">Put on solo. Easy in/out between rounds. 99% of Muay Thai training gloves are velcro.</p>
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                    <p className="font-bold text-white mb-1">Lace-Up</p>
                    <p className="text-zinc-400 text-xs">Tighter, more secure fit. Needs someone to tie them. Used in competition. Not practical for daily training.</p>
                  </div>
                </div>
                <p className="text-zinc-500 text-xs">Default to velcro unless you're specifically buying competition gloves.</p>
              </div>
            ),
          },
          {
            title: "Step 5: Which Brand?",
            content: (
              <div className="space-y-2 text-sm text-zinc-300">
                <p>→ <strong className="text-white">Fairtex BGV1</strong> (~$89) — Best all-rounder. Most popular in gyms worldwide.</p>
                <p>→ <strong className="text-white">Twins BGVL3</strong> (~$95) — More padding, better for sparring.</p>
                <p>→ <strong className="text-white">Hayabusa T3</strong> (~$149) — Best wrist support. Worth it if you have wrist issues.</p>
                <p>→ <strong className="text-white">Venum Contender</strong> (~$45) — Best budget pick for beginners.</p>
              </div>
            ),
          },
        ].map((section) => (
          <div key={section.title} className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
            {section.content}
          </div>
        ))}

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Let us pick for you</h3>
          <p className="text-zinc-400 text-sm mb-4">Answer a few quick questions and we'll recommend the exact glove for your weight, training style, wrist strength, and budget.</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Find My Gloves →
          </Link>
        </div>
      </div>
    </main>
  );
}
