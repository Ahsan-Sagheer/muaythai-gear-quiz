import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muay Thai 4-Week Cardio Training Plan — Stop Gassing Out",
  description: "A 4-week Muay Thai cardio plan built specifically for fighters. Progressive conditioning from beginner to fight-ready in 28 days. Free download.",
};

const weeks = [
  { week: "Week 1", title: "Build the Base", desc: "Steady-state runs, jump rope, bag rounds at moderate intensity. Establish your aerobic foundation." },
  { week: "Week 2", title: "Add Intensity", desc: "Interval runs, shadowboxing circuits, hill sprints. Start pushing into higher heart rate zones." },
  { week: "Week 3", title: "Fight Simulation", desc: "5-round sessions, fight-pace circuits, full conditioning days. Train like you're preparing for a real fight." },
  { week: "Week 4", title: "Peak & Test", desc: "Hit your peak conditioning, then test yourself with a 5-round bag session at RPE 9." },
];

const includes = [
  "4-week progressive training schedule",
  "Day-by-day workout breakdown with duration and intensity",
  "5 key Muay Thai drills explained in detail",
  "Teep cardio drill, switch kick intervals, jump rope pyramid",
  "Nutrition basics for fighters",
  "Round timing system (3 min on, 1 min rest)",
  "RPE intensity scale explained",
];

export default function Cardioplan() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-red-400 text-sm hover:text-red-300">← Back to Gear Quiz</Link>
        </div>

        {/* Hero */}
        <div className="text-center mb-10">
          <div className="inline-block bg-red-900/30 border border-red-800 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Free Download
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Stop Gassing Out.<br /><span className="text-red-500">Build Real Muay Thai Cardio.</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            A 4-week conditioning plan built specifically for Muay Thai — not generic fitness. Go from gasping in round 1 to lasting 5 full rounds.
          </p>
        </div>

        {/* Week preview */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {weeks.map((w) => (
            <div key={w.week} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
              <p className="text-xs text-red-400 font-semibold uppercase tracking-widest mb-1">{w.week}</p>
              <p className="text-white font-bold text-sm mb-1">{w.title}</p>
              <p className="text-zinc-500 text-xs">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* What's inside */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
          <h2 className="text-lg font-bold text-white mb-4">What&apos;s inside</h2>
          <div className="space-y-2">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-red-500 mt-0.5 flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-red-600 rounded-2xl p-6 text-center mb-6">
          <p className="text-white font-bold text-xl mb-1">Free Download</p>
          <p className="text-red-200 text-sm mb-4">PDF — works on any device</p>
          <a
            href="/muaythai-cardio-plan.pdf"
            download="muaythai-cardio-plan.pdf"
            className="inline-block bg-white text-red-600 font-bold px-8 py-3 rounded-xl text-base hover:bg-red-50 transition-colors"
          >
            Download the Plan →
          </a>
        </div>

        <p className="text-center text-zinc-600 text-xs mb-10">No signup. No email required. Just download and start.</p>

        {/* Gear CTA */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
          <p className="text-zinc-400 text-sm mb-1">Need gear to go with the plan?</p>
          <p className="text-white font-bold mb-3">Take the free quiz — get a personalized kit recommendation</p>
          <Link href="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
            Find My Gear →
          </Link>
        </div>
      </div>
    </main>
  );
}
