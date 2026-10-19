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
      <div className="p-6">
        <p className="text-xs text-neutral-500 font-mono">
          No public repositories found.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono uppercase tracking-wider text-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/50">
              <th className="py-3 px-4">Repository</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Language</th>
              <th className="py-3 px-4">Stars / Forks</th>
              <th className="py-3 px-4">Hygiene Score</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800/60 text-xs font-mono">
            {repos.map((repo) => {
              const langColor = languageColor(repo.language);
              const qualityColor =
                repo.qualityScore >= 60
                  ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900"
                  : "text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800";

              return (
                <tr
                  key={repo.name}
                  className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40 group"
                >
                  <td className="py-4 px-4 max-w-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-neutral-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {repo.name}
                      </span>
                      {repo.isArchived && (
                        <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-1.5 py-0.5 rounded border border-neutral-200 dark:border-neutral-700">
                          Archived
                        </span>
                      )}
                    </div>
                    {repo.description && (
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 truncate font-sans mt-1">
                        {repo.description}
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {repo.isFork ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800">
                        <GitBranch size={12} /> Fork
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900">
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
                        <span className="text-neutral-700 dark:text-neutral-300">{repo.language}</span>
                      </div>
                    ) : (
                      <span className="text-neutral-400">N/A</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-neutral-950 dark:text-white font-bold">
                        <Star size={13} className="text-emerald-500" /> {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-500">
                        <GitFork size={13} /> {repo.forks}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-lg border font-bold ${qualityColor}`}
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
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-950 dark:hover:border-neutral-500 transition-colors shadow-2xs"
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
