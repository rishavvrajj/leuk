import { getPortfolio, UserNotFoundError } from "@/lib/github";
import ProfileCard from "./ProfileCard";

const usernames = [
  { id: 1, username: "torvalds" },
  { id: 2, username: "karpathy" },
  { id: 8, username: "gustavoguanabara" },
  { id: 9, username: "rafaballerini" },
  { id: 10, username: "mattpocock" },
  { id: 11, username: "3b1b" },
  { id: 12, username: "antfu" },
  { id: 13, username: "kunal-kushwaha" },
];

export default async function Profile() {
  const profiles = await Promise.all(
    usernames.slice(0, 4).map(async ({ username }) => {
      try {
        const portfolio = await getPortfolio(username);

        return {
          username,
          portfolio,
          topRepoStars: portfolio.repos[0]?.stars ?? 0,
        };
      } catch (error) {
        if (error instanceof UserNotFoundError) {
          return { username, portfolio: null, topRepoStars: 0 };
        }

        throw error;
      }
    })
  );

  return (
    <section
      id="Profile"
      className="flex items-center justify-center mx-4 sm:mx-8 md:mx-30 py-2 sm:py-16"
    >
      <div className="space-y-4 sm:space-y-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-100 text-left w-full md:w-1/2">
            <span className="text-4xl sm:text-6xl lg:text-7xl block">
              Developer
            </span>
            <span className="text-3xl sm:text-5xl lg:text-5xl italic text-emerald-800">
              Profiles
            </span>{" "}
            .
          </h2>

          <p className="hidden lg:block text-xs md:text-sm leading-relaxed italic text-zinc-400 text-left w-full md:w-1/2">
            Quick stats from featured developers showing their top repository
            stars and language activity.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {profiles.map((profile) => (
            <ProfileCard key={profile.username} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
}