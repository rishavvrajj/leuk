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
    return {
      title: p.name
        ? `${p.name} (@${p.username}) — GitHub Portfolio`
        : `@${p.username} — GitHub Portfolio`,
      description: p.bio ?? `${p.username}'s GitHub portfolio.`,
      openGraph: {
        title: p.name
          ? `${p.name} (@${p.username}) — GitHub Portfolio`
          : `@${p.username} — GitHub Portfolio`,
        images: [p.avatarUrl],
      },
    };
  } catch {
    return {
      title: `@${username} — GitHub Portfolio`,
      description: `${username}'s GitHub portfolio.`,
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

  const badges: Array<{ icon: string; text: string; href?: string }> = [];
  if (portfolio.company) badges.push({ icon: "🏢", text: portfolio.company });
  if (portfolio.location) badges.push({ icon: "📍", text: portfolio.location });
  badges.push({ icon: "👥", text: `${nf.format(portfolio.followers)} followers` });
  if (portfolio.blog) badges.push({ icon: "🔗", text: portfolio.blog, href: portfolio.blog });
  if (portfolio.twitterUsername)
    badges.push({
      icon: "𝕏",
      text: `@${portfolio.twitterUsername}`,
      href: `https://x.com/${portfolio.twitterUsername}`,
    });

  return (
    <main className="flex-1 bg-zinc-950 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header meta + refresh */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            Edited portfolio for{" "}
            <span className="font-medium text-zinc-300">@{portfolio.username}</span>{" "}
            from GitHub.
          </p>
          <RefreshButton username={portfolio.username} />
        </div>

        {/* Hero */}
        <header className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src={portfolio.avatarUrl}
              alt={`${portfolio.username} avatar`}
              width={128}
              height={128}
              priority
              className="h-32 w-32 rounded-2xl border-2 border-emerald-500/60 object-cover shadow-lg shadow-emerald-500/10"
            />
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-zinc-50">
                {portfolio.name ?? `@${portfolio.username}`}
              </h1>
              <p className="mt-1 text-emerald-400">@{portfolio.username}</p>
              {portfolio.bio && (
                <p className="mt-3 max-w-xl text-zinc-400">{portfolio.bio}</p>
              )}
              {badges.length > 0 && (
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
                  {badges.map((b, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-400"
                    >
                      <span aria-hidden>{b.icon}</span>
                      {b.href ? (
                        <a
                          href={b.href}
                          target={b.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="transition hover:text-emerald-400 hover:underline"
                        >
                          {b.text}
                        </a>
                      ) : (
                        b.text
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon="⭐"
            label="Total Stars"
            value={nf.format(portfolio.totalStars)}
          />
          <StatCard
            icon="🗂️"
            label="Public Repos"
            value={nf.format(portfolio.publicRepos)}
          />
          <StatCard
            icon="👥"
            label="Followers"
            value={nf.format(portfolio.followers)}
          />
          <StatCard
            icon="🏆"
            label="Top Repo Stars"
            value={nf.format(topRepoStars)}
          />
        </section>

        {/* Language breakdown */}
        <section className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur">
          <h2 className="mb-5 text-lg font-semibold text-zinc-100">
            Language Breakdown
          </h2>
          <LanguageBars breakdown={portfolio.languageBreakdown} />
        </section>

        {/* Top repositories */}
        <section className="mt-6">
          <h2 className="mb-4 text-lg font-semibold text-zinc-100">
            Top Repositories
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {portfolio.repos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center gap-2 border-t border-zinc-800 pt-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
          <p>
            Data from{" "}
            <a
              href={`https://github.com/${portfolio.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-400"
            >
              GitHub
            </a>{" "}
            · cached for 1 hour
          </p>
          <Link
            href="/"
            className="font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            Create yours →
          </Link>
        </footer>
      </div>
    </main>
  );
}