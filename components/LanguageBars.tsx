import { languageColor } from "@/lib/colors";

interface LanguageBarsProps {
  breakdown: Record<string, number>;
}

export default function LanguageBars({ breakdown }: LanguageBarsProps) {
  const entries = Object.entries(breakdown).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    return null;
  }

  const colors = entries.map(([lang]) => languageColor(lang));

  return (
    <div className="space-y-4">
      {/* Single stacked progress bar */}
      <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-zinc-900 gap-0.5">
        {entries.map(([lang, pct], i) => (
          <div
            key={lang}
            style={{ width: `${pct}%`, backgroundColor: colors[i] }}
            title={`${lang}: ${pct}%`}
          />
        ))}
      </div>

      {/* Grid breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
        {entries.map(([lang, pct], i) => (
          <div key={lang} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 truncate">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: colors[i] }}
              />
              <span className="font-medium text-zinc-300 truncate">{lang}</span>
            </span>
            <span className="font-mono text-zinc-500 tabular-nums">{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
