"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { GitCompare, Terminal, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function CompareSearch() {
  const [leftUser, setLeftUser] = useState("");
  const [rightUser, setRightUser] = useState("");
  const router = useRouter();

  const handleCompare = (e: React.FormEvent) => {
    e.preventDefault();
    if (leftUser.trim() && rightUser.trim()) {
      router.push(`/compare/${encodeURIComponent(leftUser.trim())}/${encodeURIComponent(rightUser.trim())}`);
    }
  };

  const presetPairs = [
    { left: "torvalds", right: "sindresorhus", label: "Linus Torvalds vs Sindre Sorhus" },
    { left: "gaearon", right: "tj", label: "Dan Abramov vs TJ Holowaychuk" },
    { left: "rishavvrajj", right: "torvalds", label: "Rishav vs Linus Torvalds" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50 flex flex-col selection:bg-emerald-500 selection:text-neutral-950 font-sans">
      <AnalyticsNavBar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-16 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/3 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl w-full mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs font-mono text-emerald-400">
            <GitCompare size={13} />
            <span>Side-by-Side Developer Comparison</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-mono">
            GitHub Profile <span className="text-emerald-400">Comparison</span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Compare two GitHub developers side by side across consistency, impact, language overlap, and role-fit scores.
          </p>

          <form onSubmit={handleCompare} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-3 rounded-2xl shadow-xl">
                <Terminal size={16} className="text-neutral-500" />
                <input
                  type="text"
                  value={leftUser}
                  onChange={(e) => setLeftUser(e.target.value)}
                  placeholder="First username (e.g. torvalds)"
                  className="w-full bg-transparent py-1 text-sm text-white focus:outline-none placeholder:text-neutral-500 font-mono"
                />
              </div>

              <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 p-3 rounded-2xl shadow-xl">
                <Terminal size={16} className="text-neutral-500" />
                <input
                  type="text"
                  value={rightUser}
                  onChange={(e) => setRightUser(e.target.value)}
                  placeholder="Second username (e.g. sindresorhus)"
                  className="w-full bg-transparent py-1 text-sm text-white focus:outline-none placeholder:text-neutral-500 font-mono"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-lg"
            >
              <span>Compare Profiles Side-by-Side</span>
              <ArrowRight size={14} />
            </button>
          </form>

          {/* Preset Pairs */}
          <div className="pt-6 space-y-2">
            <span className="text-xs font-mono text-neutral-500">Or try popular comparison pairs:</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {presetPairs.map((pair) => (
                <button
                  key={pair.left + pair.right}
                  onClick={() => router.push(`/compare/${pair.left}/${pair.right}`)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:text-white text-xs font-mono transition-colors"
                >
                  {pair.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CompareSearch;
