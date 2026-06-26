"use client";

import { useState, useEffect } from "react";
import { quizSteps, QuizAnswer } from "@/data/quiz";
import { getRecommendations, getTotalPrice, Recommendation } from "@/lib/recommend";

const defaultAnswers: QuizAnswer = {
  experience: "beginner",
  weight: "130-160",
  weakWrists: false,
  trainingFocus: "all-around",
  glovePadding: "thick",
  gloveClosure: "hook-and-loop",
  sweatyHands: false,
  buyingKit: "full",
  needShinGuards: true,
  shinAnkleCoverage: false,
  shinKneeCoverage: false,
  shinType: "slip-on",
  needThaiPads: false,
  padMaterial: "synthetic",
  padShape: "curved",
  holderExperience: "beginner",
  holderHandSize: "normal",
  needHandWraps: true,
  needShorts: false,
  glovesBudget: "60-120",
  shinBudget: "40-80",
};

export default function Home() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer>(defaultAnswers);
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);

  const visibleSteps = quizSteps.filter((s) => {
    if (!s.dependsOn) return true;
    return answers[s.dependsOn.field] === s.dependsOn.value;
  });

  const currentStep = visibleSteps[step];
  const progress = Math.round((step / visibleSteps.length) * 100);

  function handleAnswer(value: string | boolean) {
    const updated = { ...answers, [currentStep.id]: value };
    setAnswers(updated);
    // Auto-advance on boolean and single-choice questions after a short delay
    setTimeout(() => {
      const updatedVisible = quizSteps.filter((s) => {
        if (!s.dependsOn) return true;
        return updated[s.dependsOn.field] === s.dependsOn.value;
      });
      if (step < updatedVisible.length - 1) {
        setStep((s) => s + 1);
      } else {
        setRecommendations(getRecommendations(updated));
      }
    }, 300);
  }

  function next() {
    if (step < visibleSteps.length - 1) {
      setStep((s) => s + 1);
    } else {
      setRecommendations(getRecommendations(answers));
    }
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function restart() {
    setStep(0);
    setAnswers(defaultAnswers);
    setRecommendations(null);
  }

  const currentValue = answers[currentStep?.id as keyof QuizAnswer];

  if (recommendations) {
    const total = getTotalPrice(recommendations);
    return (
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-red-500 mb-2">Your Kit</h1>
            <p className="text-zinc-400">Personalized gear recommendations based on your answers</p>
          </div>

          <div className="space-y-4 mb-8">
            {recommendations.map((rec) => (
              <div key={rec.product.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">{rec.category}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{rec.product.name}</h3>
                  <p className="text-zinc-400 text-sm mb-2">{rec.product.description}</p>
                  <p className="text-xs text-zinc-500 italic mb-3">{rec.reason}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {Object.entries(rec.product.specs).map(([k, v]) => (
                      <span key={k} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">
                        {k}: {v}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between min-w-[120px]">
                  <span className="text-2xl font-bold text-white">${rec.product.price}</span>
                  <a
                    href={rec.product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
                  >
                    Buy on Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex justify-between items-center mb-6">
            <span className="text-zinc-400 font-medium">Estimated Total</span>
            <span className="text-3xl font-bold text-red-400">${total}</span>
          </div>

          <button
            onClick={restart}
            className="w-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 py-3 rounded-xl transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </main>
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full">
          {/* Hero */}
          <div className="text-center mb-6">
            <div className="inline-block bg-red-900/30 border border-red-800 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Free · No signup · 2 minutes
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
              Stop guessing.<br /><span className="text-red-500">Get the right gear.</span>
            </h1>
            <p className="text-zinc-400 text-base">
              Answer a few quick questions and get a personalized Muay Thai kit — matched to your training style, wrist strength, and budget.
            </p>
          </div>

          {/* Example result preview */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 mb-6">
            <p className="text-xs text-zinc-500 uppercase font-semibold tracking-widest mb-3">Example result</p>
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase">Gloves</p>
                <p className="text-white font-semibold text-sm">Fairtex BGV1</p>
                <p className="text-zinc-500 text-xs">Chosen for: wrist support, sparring</p>
              </div>
              <span className="text-white font-bold">$89</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-red-400 font-semibold uppercase">Shin Guards</p>
                <p className="text-white font-semibold text-sm">Fairtex SP5</p>
                <p className="text-zinc-500 text-xs">Chosen for: ankle coverage, strap-on</p>
              </div>
              <span className="text-white font-bold">$89</span>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => setStarted(true)}
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-2xl transition-colors mb-3"
          >
            Find My Gear →
          </button>

          {/* Social proof */}
          <p className="text-center text-zinc-600 text-xs">
            Trusted by fighters in 🇺🇸 🇦🇺 🇬🇧 🇩🇪 and more
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <div className="text-center pt-12 pb-6 px-4">
        <h1 className="text-3xl font-bold text-white mb-1">
          Muay Thai <span className="text-red-500">Gear Quiz</span>
        </h1>
        <p className="text-zinc-400 text-sm">Answer a few questions, get your perfect kit</p>
      </div>

      <div className="max-w-xl mx-auto w-full px-4 mb-6">
        <div className="flex justify-between text-xs text-zinc-500 mb-1">
          <span>Question {step + 1} of {visibleSteps.length}</span>
          <span className="text-red-400 font-semibold">
            {visibleSteps.length - step - 1 === 0
              ? "Last question!"
              : `${visibleSteps.length - step - 1} left`}
          </span>
        </div>
        <div className="h-1.5 bg-zinc-800 rounded-full">
          <div
            className="h-1.5 bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col max-w-xl mx-auto w-full px-4">
        <div className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">
          {currentStep?.section}
        </div>
        <h2 className="text-xl font-bold text-white mb-6">{currentStep?.question}</h2>

        {currentStep?.type === "boolean" ? (
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { value: true, label: "Yes" },
              { value: false, label: "No" },
            ].map((opt) => (
              <button
                key={String(opt.value)}
                onClick={() => handleAnswer(opt.value)}
                className={`py-4 rounded-2xl border text-sm font-semibold transition-all ${
                  currentValue === opt.value
                    ? "bg-red-600 border-red-600 text-white"
                    : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3 mb-8">
            {currentStep?.options?.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all ${
                  currentValue === opt.value
                    ? "bg-red-600 border-red-600 text-white"
                    : "bg-zinc-900 border-zinc-700 text-zinc-300 hover:border-zinc-500"
                }`}
              >
                <div className="font-semibold">{opt.label}</div>
                {opt.description && (
                  <div className={`text-xs mt-0.5 ${currentValue === opt.value ? "text-red-200" : "text-zinc-500"}`}>
                    {opt.description}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-3 pb-12">
          {step > 0 && (
            <button
              onClick={prev}
              className="py-3 px-5 border border-zinc-700 text-zinc-400 hover:text-white rounded-xl transition-colors"
            >
              ← Back
            </button>
          )}
          <p className="flex-1 text-center text-xs text-zinc-600 self-center">
            {currentStep?.type === "boolean" ? "Tap to auto-advance" : "Tap an option to continue"}
          </p>
        </div>
      </div>
    </main>
  );
}
