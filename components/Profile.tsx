import { getPortfolio, UserNotFoundError } from '@/lib/github';

const username = [
    { id: 1, username: "torvalds" },
    { id: 2, username: "karpathy" },
    { id: 8, username: "gustavoguanabara" },
    { id: 9, username: "rafaballerini" },
    { id: 10, username: "mattpocock" },
    { id: 11, username: "3b1b" },
    { id: 12, username: "antfu" },
    { id: 13, username: "michaelliao" },
    { id: 14, username: "kunal-kushwaha" },
];

export default async function Profile() {
    const portfolio = await Promise.all(
        username.slice(0, 4).map(async ({ username }) => {
            try {
                const portfolio = await getPortfolio(username);
                const topRepoStars = portfolio.repos[0]?.stars ?? 0;
                const hasLanguages = Object.keys(portfolio.languageBreakdown).length > 0;
                const hasRepos = portfolio.repos.length > 0;
                return { username, portfolio, topRepoStars, hasLanguages, hasRepos }
            } catch (err) {
                if (err instanceof UserNotFoundError)
                    return { username, portfolio: null };
                throw err;
            }
        })
    )

    return (
        <section id="Profile" className="flex items-center justify-center mx-4 sm:mx-8 md:mx-30 py-2 sm:py-16">
            <div className="space-y-4 sm:space-y-12">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                    <h2 className="text-5xl font-bold tracking-tight text-zinc-100 text-left w-full md:w-1/2">
                        <span className="text-4xl sm:text-6xl lg:text-7xl block">Developer</span>
                        <span className="text-3xl sm:text-5xl lg:text-5xl italic text-emerald-800">Profiles</span> .
                    </h2>
                    <p className="hidden lg:block text-xs md:text-sm leading-relaxed italic text-zinc-400 text-left w-full md:w-1/2">
                        Quick stats from featured developers showing their top repository stars and language activity.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {portfolio.map((profile) => (
                        <div
                            key={profile.username}
                            className="group gap-4 flex flex-col items-start justify-between transition-all duration-300 hover:border-zinc-700 hover:cursor-pointer hover:-translate-y-1"
                        >
                            <div className="relative aspect-square w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-emerald-900/20 to-emerald-900/10">
                                {profile.portfolio ? (
                                    <img
                                        src={profile.portfolio.avatarUrl}
                                        alt={`${profile.username}'s GitHub avatar`}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="text-2xl font-bold text-emerald-400">
                                        {profile.username.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-1 md:h-20 lg:h-16">
                                <h3 className="text-xs md:text-sm font-semibold text-zinc-100">
                                    {profile.username}
                                </h3>

                                {profile.portfolio ? (
                                    <p className="text-[8px] md:text-xs leading-relaxed text-zinc-400">
                                        Top Repo Stars: {profile.topRepoStars}
                                    </p>
                                ) : (
                                    <p className="text-[8px] md:text-xs leading-relaxed text-red-500">
                                        Profile Not Found
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
