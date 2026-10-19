"use client";

import { languageColor } from "@/lib/colors";

interface LanguageAllocationProps {
  languageBreakdown: Record<string, number>;
}

export function LanguageAllocation({ languageBreakdown }: LanguageAllocationProps) {
  const languages = Object.entries(languageBreakdown).sort((a, b) => b[1] - a[1]);

  if (languages.length === 0) {
    return (
      <div className="p-6">
        <p className="text-xs text-neutral-500 font-mono">
          No public language data identified for this profile.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stacked bar visualization */}
      <div>
        <div className="flex h-5 w-full rounded-xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden shadow-inner gap-0.5 p-0.5 border border-neutral-200 dark:border-neutral-800 mb-6">
          {languages.map(([lang, percentage]) => (
            <div
              key={lang}
              className="h-full first:rounded-l-lg last:rounded-r-lg transition-all hover:opacity-90"
              style={{
                width: `${Math.max(3, percentage)}%`,
                backgroundColor: languageColor(lang),
              }}
              title={`${lang}: ${percentage}%`}
            />
          ))}
        </div>

        {/* Detailed breakdown list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {languages.map(([lang, percentage]) => {
            const color = languageColor(lang);
            return (
              <div
                key={lang}
                className="flex items-center justify-between py-2 border-b border-neutral-200 dark:border-neutral-800/60"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-sm font-bold text-neutral-950 dark:text-white font-sans">
                    {lang}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-bold">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
