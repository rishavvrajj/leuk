'use client'

import { useState } from 'react'
import NavBar from './NavBar'
import { useRouter } from 'next/navigation';

const USERNAME_RE = /^[a-zA-Z0-9-]{1,39}$/;

export default function HeroSection() {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [error, setError] = useState<string | null>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const raw = value.trim().replace(/^@/, "");
        if (!raw) {
            setError("Enter a Github username.");
            return;
        }

        const nomalized = raw.toLocaleLowerCase();
        if (!USERNAME_RE.test(nomalized)) {
            setError(
                "Usernames can only contain letters, numbers, and hyphens (1–39 chars)."
            )
            return;
        }
        setError(null);
        router.push(`/${value}`);
    }

    return (
        <section id='Home' className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 sm:px-6 py-20 text-center">
            <NavBar />
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <img src="/bg.png" alt="" className='object-cover h-full w-full backdrop-blur-3xl' />
            </div>

            <div className="relative flex flex-col items-center justify-center z-10 w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-tight">
                    Your work is already speaking.{" "}
                    <br className="hidden sm:block" />
                    <span className=''>
                        Almost no one can{" "}
                        <span className="italic text-emerald-800">hear</span> it.
                    </span>
                </h1>

                <p className="lg:w-2xl hidden md:block px-2 text-xs sm:text-sm md:text-sm leading-relaxed text-zinc-800">
                    Somewhere in your commit history is proof of who you&apos;re becoming —
                    the 2 a.m.&nbsp;fixes, the abandoned experiments, the repo you
                    keep returning to. It&apos;s all there. It just has nowhere to
                    live.
                </p>

                <form onSubmit={handleSubmit} className="p-1.5 flex w-full max-w-60 lg:max-w-md items-center gap-2 rounded-full border border-black/50 shadow-sm transition focus-within:border-black/70 focus-within:ring-4 focus-within:ring-black/5">
                    <input
                        autoFocus
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="eg. torvalds"
                        className="min-w-0 flex-1 bg-transparent px-2 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-black outline-none placeholder:text-black/50"
                    />

                    <button
                        type="submit"
                        className="rounded-full bg-black px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:cursor-pointer hover:bg-zinc-800 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 shrink-0"
                    >
                        Create
                    </button>
                </form>
                {error && (
                    <p
                        role="alert"
                        className="-mt-2 sm:-mt-4 text-xs text-red-900"
                    >
                        {error}
                    </p>
                )}

                <p className="text-[9px] sm:text-sm text-zinc-800">
                    No forms. No rehearsing. Your GitHub is the whole story.
                </p>
            </div>
        </section>
    )
}
