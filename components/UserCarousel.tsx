import React from "react";
import Image from "next/image";
import { getPortfolio, type Portfolio } from "@/lib/github";

const users = [
    { id: 1, username: "rishavvrajj" },
    { id: 2, username: "torvalds" },
    { id: 3, username: "RustamSheoran" },
    { id: 4, username: "AayushKP" },
    { id: 5, username: "ekanshvcpkg" },
    { id: 6, username: "binaryrishabh" },
    { id: 7, username: "karpathy" },
    { id: 8, username: "gustavoguanabara" },
    { id: 9, username: "rafaballerini" },
    { id: 10, username: "mattpocock" },
    { id: 11, username: "3b1b" },
    { id: 12, username: "antfu" },
    { id: 13, username: "michaelliao" },
    { id: 14, username: "kunal-kushwaha" },
];

export default async function UserCarousel() {
    // Fetch each unique username once; failures fall back to static data.
    const unique = [...new Set(users.map((u) => u.username))];
    const settled = await Promise.allSettled(unique.map((u) => getPortfolio(u)));
    const byUser = new Map<string, Portfolio>();
    settled.forEach((res, i) => {
        if (res.status === "fulfilled")
            byUser.set(unique[i].toLowerCase(), res.value);
    });

    return (
        <section className="w-full py-1 border-4 border-white">
            <div className="relative overflow-hidden">
                {/* Edge fade masks, matching the site's dark background */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-black4 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-black4 to-transparent" />

                <div className="user-marquee flex w-max items-center gap-8 py-2 hover:cursor-pointer">
                    {[...users, ...users].map((user, i) => {
                        const portfolio = byUser.get(user.username.toLowerCase());
                        const name = portfolio?.name ?? `@${user.username}`;
                        const username = portfolio?.username ?? user.username;
                        return (
                            <div
                                key={`${user.username}-${i}`}
                                className="group/user flex shrink-0 items-center gap-2 whitespace-nowrap transition-all hover:scale-105"
                            >
                                {portfolio?.avatarUrl ? (
                                    <Image
                                        src={portfolio.avatarUrl}
                                        alt={`${name} avatar`}
                                        width={16}
                                        height={16}
                                        className="h-4 w-4 rounded-full object-cover transition-transform duration-200 group-hover/user:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold text-zinc-300">
                                        {username[0]?.toUpperCase()}
                                    </div>
                                )}
                                <span className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-300 group-hover/user:text-zinc-100">
                                    {name.toLowerCase()}
                                </span>
                            </div>
                        );
                    })}
                    
                </div>
            </div>

            <style>{`
                @keyframes user-marquee {
                    from { transform: translateX(-50%); }
                    to   { transform: translateX(0); }
                }
                .user-marquee {
                    animation: user-marquee 40s linear infinite;
                }
                .user-marquee:hover {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .user-marquee {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}