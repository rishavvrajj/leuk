"use client";

import { useRouter } from "next/navigation";

type ProfileCardProps = {
  profile: {
    username: string;
    topRepoStars: number;
    portfolio: {
      avatarUrl: string;
    } | null;
  };
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/${profile.username}`)}
      className="group gap-4 flex flex-col items-start justify-between text-left transition-all duration-300 hover:border-zinc-700 hover:cursor-pointer hover:-translate-y-1"
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
    </button>
  );
}