"use client";

import { RepoAnalysis } from "@/lib/analytics-types";
import { languageColor } from "@/lib/colors";
import { Star, GitFork, ExternalLink, ShieldCheck, GitBranch } from "lucide-react";

interface TopRepositoriesProps {
  repos: RepoAnalysis[];
}

export function TopRepositories({ repos }: TopRepositoriesProps) {
  if (repos.length === 0) {
    return (
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
        <h2 className="text-lg font-bold text-white font-mono tracking-tight mb-2">
          Top Repositories
        </h2>
        <p className="text-xs text-neutral-400 font-mono">
          No public repositories found.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h2 className="text-lg font-bold text-white font-mono tracking-tight">
            Top Repositories & Quality Audit
          </h2>
          <p className="text-xs text-neutral-400 font-mono mt-0.5">
            Ranked by star impact, hygiene score, and recency
          </p>
        </div>
        <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700">
          Showing Top {repos.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
              <th className="py-3 px-4">Repository</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Language</th>
              <th className="py-3 px-4">Stars / Forks</th>
              <th className="py-3 px-4">Hygiene Score</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/60 text-xs font-mono">
            {repos.map((repo) => {
              const langColor = languageColor(repo.language);
              const qualityColor =
                repo.qualityScore >= 75
                  ? "text-emerald-400 bg-emerald-950/60 border-emerald-900"
                  : repo.qualityScore >= 50
                  ? "text-cyan-400 bg-cyan-950/60 border-cyan-900"
                  : "text-amber-400 bg-amber-950/60 border-amber-900";

              return (
                <tr
                  key={repo.name}
                  className="transition-colors hover:bg-neutral-800/40 group"
                >
                  <td className="py-4 px-4 max-w-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {repo.name}
                      </span>
                      {repo.isArchived && (
                        <span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-700">
                          Archived
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="text-[11px] text-neutral-400 truncate font-sans mt-1">
                        {repo.description}
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {repo.isFork ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900">
                        <GitBranch size={12} /> Fork
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900">
                        <ShieldCheck size={12} /> Original
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {repo.language ? (
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: langColor }}
                        />
                        <span className="text-neutral-300">{repo.language}</span>
                      </div>
                    ) : (
                      <span className="text-neutral-600">N/A</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-amber-300">
                        <Star size={13} /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-400">
                        <GitFork size={13} /> {repo.forks}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded border font-bold ${qualityColor}`}
                    >
                      {repo.qualityScore}/100
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <a
                      href={repo.htmlUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`View ${repo.name} on GitHub`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
