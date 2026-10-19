"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { SectionShell } from "@/components/ui/SectionShell";
import { Terminal, ArrowRight } from "lucide-react";

export default function CompareSearch() {
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
    { left: "yyx990803", right: "torvalds", label: "Evan You vs Linus Torvalds" },
  ];

  return (
    <main className="relative flex w-full flex-col items-center min-h-screen bg-neutral-100 dark:bg-neutral-950 font-sans">
      <Pattern />

      <div className="z-10 flex w-full flex-col items-center">
        <div>
          <SectionSeparator />
          <AnalyticsNavBar />
        </div>

        <SectionSeparator />
        <SectionShell className="flex items-center w-full" contentClassName="flex items-center justify-center p-6 sm:p-12 w-full">
          <div className="max-w-2xl w-full mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-sans">
                Compare GitHub Profiles
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Compare two developer profiles side-by-side across scores, impact, and stacks
              </p>
            </div>

            <form onSubmit={handleCompare} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-2xl shadow-sm min-w-0">
                  <Terminal size={16} className="text-neutral-400 shrink-0" />
                  <input
                    type="text"
                    value={leftUser}
                    onChange={(e) => setLeftUser(e.target.value)}
                    placeholder="e.g. torvalds"
                    className="w-full bg-transparent py-1 text-xs sm:text-sm text-neutral-950 dark:text-white focus:outline-none placeholder:text-neutral-400 font-mono min-w-0"
                  />
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-2xl shadow-sm min-w-0">
                  <Terminal size={16} className="text-neutral-400 shrink-0" />
                  <input
                    type="text"
                    value={rightUser}
                    onChange={(e) => setRightUser(e.target.value)}
                    placeholder="e.g. sindresorhus"
                    className="w-full bg-transparent py-1 text-xs sm:text-sm text-neutral-950 dark:text-white focus:outline-none placeholder:text-neutral-400 font-mono min-w-0"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-mono text-xs font-bold px-6 py-3.5 rounded-2xl transition-colors shadow-sm"
              >
                <span>Compare Profiles Side-by-Side</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="pt-4 text-center space-y-2 border-t border-neutral-200 dark:border-neutral-800">
              <span className="text-xs font-mono text-neutral-500">Popular comparison pairs:</span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {presetPairs.map((pair) => (
                  <button
                    key={pair.left + pair.right}
                    onClick={() => router.push(`/compare/${pair.left}/${pair.right}`)}
                    className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-950 dark:hover:border-neutral-50 text-xs font-mono transition-colors"
                  >
                    {pair.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <div>
          <SectionSeparator />
          <Footer />
          <SectionSeparator />
        </div>
      </div>
    </main>
  );
}
