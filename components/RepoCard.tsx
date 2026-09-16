import type { Repo } from "@/lib/github";
import { languageColor } from "@/lib/colors";

export default function RepoCard({ repo }: { repo: Repo }) {
  const color = languageColor(repo.language);
  return (
    <a
      href={repo.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur transition hover:border-emerald-500 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="break-all font-semibold text-emerald-400 hover:underline">
          {repo.name}
        </h3>
        {repo.isArchived && (
          <span className="shrink-0 rounded-full border border-zinc-700 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-400">
            Archived
          </span>
        )}
      </div>

      {repo.description && (
        <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
          {repo.description}
        </p>
      )}

      {repo.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-800 bg-zinc-800/60 px-2 py-0.5 text-[11px] text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-4 pt-4 text-sm text-zinc-400">
        <span className="flex items-center gap-1.5">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          {repo.language ?? "N/A"}
        </span>
        <span className="flex items-center gap-1">⭐ {repo.stars}</span>
        <span className="flex items-center gap-1">⑂ {repo.forks}</span>
        {repo.homepage && (
          <span className="ml-auto text-zinc-500">external ↗</span>
        )}
      </div>
    </a>
  );
}