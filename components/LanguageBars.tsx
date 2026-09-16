import { languageColor } from "@/lib/colors";

interface LanguageBarsProps {
  breakdown: Record<string, number>;
}

export default function LanguageBars({ breakdown }: LanguageBarsProps) {
  const entries = Object.entries(breakdown).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    return (
      <p className="py-6 text-center text-sm text-zinc-500">
        No language data available.
      </p>
    );
  }

  const colors = entries.map(([lang]) => languageColor(lang));

  return (
    <div className="space-y-4">
      {/* Single stacked horizontal bar */}
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-zinc-800">
        {entries.map(([lang, pct], i) => (
          <div
            key={lang}
            style={{ width: `${pct}%`, backgroundColor: colors[i] }}
            title={`${lang}: ${pct}%`}
          />
        ))}
      </div>

      {/* One row per language */}
      <div className="space-y-3">
        {entries.map(([lang, pct], i) => (
          <div key={lang} className="flex items-center gap-3">
            <span
              className="h-3 w-3 shrink-0 rounded-full"
              style={{ backgroundColor: colors[i] }}
            />
            <span className="w-32 truncate text-sm font-medium text-zinc-300">
              {lang}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, backgroundColor: colors[i] }}
              />
            </div>
            <span className="w-10 text-right text-sm tabular-nums text-zinc-400">
              {pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}