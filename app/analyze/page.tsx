"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnalyticsNavBar } from "@/components/analytics/AnalyticsNavBar";
import { Footer } from "@/components/page/Footer";
import { Pattern } from "@/components/ui/Pattern";
import { SectionSeparator } from "@/components/ui/SectionSeparator";
import { SectionShell } from "@/components/ui/SectionShell";
import { Terminal, ArrowRight } from "lucide-react";

export default function AnalyzeSearch() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/analyze/${encodeURIComponent(username.trim())}`);
    }
  };

  const suggestions = ["torvalds", "gaearon", "tj", "sindresorhus", "yyx990803"];

  return (
    <main className="relative flex w-full flex-col items-center bg-neutral-100 dark:bg-neutral-950 font-sans">
      <Pattern />

      <div className="z-10 flex w-full flex-col items-center">
        <div>
          <SectionSeparator />
          <AnalyticsNavBar />
        </div>

        <SectionSeparator />
        <SectionShell
          containerClassName="h-[calc(100vh-10rem)] w-full"
          className="flex w-full h-full"
          contentClassName="mx-auto flex w-full max-w-6xl items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-xl w-full mx-auto space-y-4 sm:space-y-6">
            <div className="text-center space-y-1.5 sm:space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white font-sans">
                Analyze GitHub Profile
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 font-mono">
                Enter any GitHub username to generate deep code metrics & AI insights
              </p>
            </div>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2 sm:p-2.5 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 px-3 w-full min-w-0">
                <Terminal size={18} className="text-neutral-400 shrink-0" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. torvalds"
                  className="w-full bg-transparent py-2 text-xs sm:text-sm text-neutral-950 dark:text-white focus:outline-none placeholder:text-neutral-400 font-mono min-w-0"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-mono text-xs font-bold px-6 py-3 rounded-xl transition-colors shrink-0"
              >
                <span>Analyze</span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-neutral-500 pt-2">
              <span>Popular:</span>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => router.push(`/analyze/${s}`)}
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-950 dark:hover:border-neutral-50 transition-colors"
                >
                  @{s}
                </button>
              ))}
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
