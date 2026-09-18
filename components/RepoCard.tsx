import type { Repo } from "@/lib/github";
import { languageColor } from "@/lib/colors";

export default function RepoCard({ repo }: { repo: Repo }) {
  const color = languageColor(repo.language);

  return (
    <a
      href={repo.htmlUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-5 transition-all duration-200 hover:border-zinc-700/80 hover:bg-zinc-900/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm sm:text-base font-medium text-zinc-100 group-hover:text-white transition-colors flex items-center gap-1.5 truncate">
          <span className="truncate">{repo.name}</span>
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </h3>
        {repo.isArchived && (
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-500">
            Archived
          </span>
        )}
      </div>

      {repo.description && (
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
          {repo.description}
        </p>
      )}

      {repo.topics && repo.topics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded border border-zinc-800/60 bg-zinc-800/40 px-1.5 py-0.5 text-[11px] font-mono text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-3 pt-4 text-xs font-mono text-zinc-500">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full shrink-0"
              style={{ backgroundColor: color }}
            />
            <span className="truncate">{repo.language}</span>
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-zinc-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="tabular-nums">{repo.stars}</span>
        </span>
        <span className="flex items-center gap-1">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-zinc-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="3" x2="6" y2="15" />
            <circle cx="18" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 9a9 9 0 0 1-9 9" />
          </svg>
          <span className="tabular-nums">{repo.forks}</span>
        </span>
        {repo.homepage && (
          <span className="ml-auto text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors">
            website ↗
          </span>
        )}
      </div>
    </a>
  );
}
