"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { Search, Terminal, BarChart2, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export function AnalyzeSearch() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/analyze/${encodeURIComponent(username.trim())}`);
    }
  };

  const suggestions = ["torvalds", "gaearon", "tj", "sindresorhus", "rishavvrajj"];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans">
      <AnalyticsNavBar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-16 relative overflow-hidden">
        {/* Glow background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-emerald-400">
            <BarChart2 size={13} />
            <span>Leuk Analytics Engine v1.0</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-mono">
            GitHub Profile <span className="text-emerald-400">Analytics</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Evaluate public GitHub developer signals like a financial stock dashboard. Transparent scoring, momentum metrics, and recruiter intelligence.
          </p>

          <form onSubmit={handleSearch} className="mt-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-neutral-900 border border-neutral-800 p-2 sm:p-2.5 rounded-2xl sm:rounded-4xl shadow-2xl">
              <div className="flex items-center gap-2 px-3 w-full">
                <Terminal size={18} className="text-neutral-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username (e.g. torvalds)"
                  className="w-full bg-transparent py-2 text-sm text-white focus:outline-none placeholder:text-neutral-500 font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold px-6 py-3 rounded-xl sm:rounded-3xl transition-colors shadow-lg"
              >
                <span>Analyze Profile</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </form>

          {/* Quick Suggestions */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-400">
            <span className="text-neutral-500">Popular developers:</span>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => router.push(`/analyze/${s}`)}
                className="px-3 py-1 rounded-lg border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:text-white transition-colors"
              >
                @{s}
              </button>
            ))}
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 text-left">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <div className="p-2 rounded-xl bg-neutral-800/80 w-fit text-emerald-400 mb-3">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-xs font-bold text-white font-mono mb-1">Transparent Scoring</h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                7 weighted signals including consistency, impact, and originality with clear explanations.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <div className="p-2 rounded-xl bg-neutral-800/80 w-fit text-cyan-400 mb-3">
                <Zap size={18} />
              </div>
              <h3 className="text-xs font-bold text-white font-mono mb-1">Momentum Tracking</h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Compare recent 90-day activity against previous baselines to spot rising velocity.
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5">
              <div className="p-2 rounded-xl bg-neutral-800/80 w-fit text-purple-400 mb-3">
                <BarChart2 size={18} />
              </div>
              <h3 className="text-xs font-bold text-white font-mono mb-1">Recruiter Intelligence</h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Technical strengths, collaboration signals, caveats, and interview questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AnalyzeSearch;
