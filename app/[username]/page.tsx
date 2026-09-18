import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPortfolio, UserNotFoundError } from "@/lib/github";
import StatCard from "@/components/StatCard";
import LanguageBars from "@/components/LanguageBars";
import RepoCard from "@/components/RepoCard";
import RefreshButton from "@/components/RefreshButton";

const nf = new Intl.NumberFormat("en-US");

interface Props {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;

  try {
    const p = await getPortfolio(username);

    const title = p.name
      ? `${p.name} (@${p.username}) — GitHub`
      : `@${p.username} — GitHub`;

    const description = p.bio ?? `${p.username}'s GitHub portfolio.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "profile",
        images: p.avatarUrl
          ? [
              {
                url: p.avatarUrl,
                width: 400,
                height: 400,
                alt: `${p.name ?? p.username}'s avatar`,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: p.avatarUrl ? [p.avatarUrl] : [],
      },
    };
  } catch {
    const title = `@${username} — GitHub Portfolio`;

    return {
      title,
      openGraph: {
        title,
        type: "profile",
        images: [],
      },
      twitter: {
        card: "summary_large_image",
        title,
        images: [],
      },
    };
  }
}

export default async function PortfolioPage({ params }: Props) {
  const { username } = await params;

  let portfolio;
  try {
    portfolio = await getPortfolio(username);
  } catch (err) {
    if (err instanceof UserNotFoundError) notFound();
    throw err;
  }

  const topRepoStars = portfolio.repos[0]?.stars ?? 0;
  const hasLanguages = Object.keys(portfolio.languageBreakdown).length > 0;
  const hasRepos = portfolio.repos.length > 0;

  return (
    <main className="flex-1 bg-zinc-950 px-6 py-16 sm:py-24 text-zinc-100">
      <div className="mx-auto w-full max-w-3xl space-y-12 sm:space-y-14">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-6 mb-10">
          <Link
            href="/"
            className="text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
          >
            ← leuk
          </Link>
          <RefreshButton username={portfolio.username} />
        </div>

        {/* Identity & Header */}
        <header className="flex flex-col sm:flex-row items-start gap-6">
          <Image
            src={portfolio.avatarUrl}
            alt={portfolio.name ?? portfolio.username}
            width={80}
            height={80}
            priority
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border border-zinc-800/80 object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
              {portfolio.name ?? `@${portfolio.username}`}
            </h1>
            {portfolio.name && (
              <a
                href={`https://github.com/${portfolio.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-sm font-mono text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
              >
                @{portfolio.username}
              </a>
            )}
            {(portfolio.company || portfolio.location) && (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-400">
                {portfolio.company && (
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-zinc-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    {portfolio.company}
                  </span>
                )}
                {portfolio.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-zinc-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {portfolio.location}
                  </span>
                )}
              </div>
            )}
          </div>
        </header>

        {/* About / Bio */}
        {portfolio.bio?.trim() && (
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              About
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300 font-normal">
              {portfolio.bio}
            </p>
          </section>
        )}

        {/* Stats */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
            Overview
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <StatCard
              label="Total Stars"
              value={nf.format(portfolio.totalStars)}
            />
            <StatCard
              label="Public Repos"
              value={nf.format(portfolio.publicRepos)}
            />
            <StatCard
              label="Followers"
              value={nf.format(portfolio.followers)}
            />
            <StatCard
              label="Top Repo Stars"
              value={nf.format(topRepoStars)}
            />
          </div>
        </section>

        {/* Language Breakdown */}
        {hasLanguages && (
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Languages
            </h2>
            <LanguageBars breakdown={portfolio.languageBreakdown} />
          </section>
        )}

        {/* Repositories */}
        {hasRepos && (
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              Repositories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolio.repos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </section>
        )}

        {/* Connect / Links */}
        <section>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
            Connect
          </h2>
          <div className="divide-y divide-zinc-800/40 border-y border-zinc-800/40">
            <a
              href={`https://github.com/${portfolio.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
            >
              <span className="text-zinc-400 group-hover:text-zinc-200">
                GitHub
              </span>
              <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
                github.com/{portfolio.username}
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
            {portfolio.blog && (
              <a
                href={
                  portfolio.blog.startsWith("http")
                    ? portfolio.blog
                    : `https://${portfolio.blog}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
              >
                <span className="text-zinc-400 group-hover:text-zinc-200">
                  Website
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-zinc-300 truncate max-w-[200px] sm:max-w-xs">
                  {portfolio.blog.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            )}
            {portfolio.twitterUsername && (
              <a
                href={`https://x.com/${portfolio.twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-2.5 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
              >
                <span className="text-zinc-400 group-hover:text-zinc-200">
                  X (Twitter)
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
                  @{portfolio.twitterUsername}
                  <svg
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <span>Data from GitHub · Cached for 1 hour</span>
          <Link
            href="/"
            className="text-zinc-400 hover:text-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
          >
            Create your portfolio →
          </Link>
        </footer>
      </div>
    </main>
  );
}
