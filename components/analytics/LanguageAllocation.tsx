"use client";

import { languageColor } from "@/lib/colors";
import { PieChart, Code2 } from "lucide-react";

interface LanguageAllocationProps {
  languageBreakdown: Record<string, number>;
}

export function LanguageAllocation({ languageBreakdown }: LanguageAllocationProps) {
  const languages = Object.entries(languageBreakdown).sort((a, b) => b[1] - a[1]);

  if (languages.length === 0) {
    return (
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        <h2 className="text-lg font-bold text-white font-mono tracking-tight mb-2">
          Language Allocation
        </h2>
        <p className="text-xs text-neutral-400 font-mono">
          No public language data identified for this profile.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-lg font-bold text-white font-mono tracking-tight flex items-center gap-2">
            <PieChart size={18} className="text-emerald-400" />
            <span>Language Allocation Matrix</span>
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">
            Asset-allocation style distribution across original public codebases
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700">
          {languages.length} Languages
        </span>
      </div>

      {/* Stacked bar visualization */}
      <div className="mb-6">
        <div className="flex h-4 w-full rounded-xl bg-neutral-800 overflow-hidden shadow-inner gap-0.5 p-0.5 bg-neutral-950">
          {languages.map(([lang, percentage]) => (
            <div
              key={lang}
              className="h-full first:rounded-l-lg last:rounded-r-lg transition-all hover:opacity-90"
              style={{
                width: `${Math.max(2, percentage)}%`,
                backgroundColor: languageColor(lang),
              }}
              title={`${lang}: ${percentage}%`}
            />
          ))}
        </div>
      </div>

      {/* Detailed breakdown list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {languages.map(([lang, percentage]) => {
          const color = languageColor(lang);
          return (
            <div
              key={lang}
              className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/70 p-4 transition-all hover:border-neutral-700"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-sm font-bold text-white font-mono">
                  {lang}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400 font-bold">
                  {percentage}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
