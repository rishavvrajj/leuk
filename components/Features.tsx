import Link from "next/link";

const FEATURES = [
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        ),
        title: "Real work, not résumés",
        body: "Leuk reads the public work you've already shipped and arranges it into a living profile — no bullet points, no noise.",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
        ),
        title: "Zero setup",
        body: "Drop in your GitHub handle. No database, no dashboards to feed, no profile to babysit. That was the hard part.",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
            </svg>
        ),
        title: "Updates itself",
        body: "Every push, every star, every contribution becomes part of your story. Your presence moves the way you do.",
    },
    {
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
        title: "Private by default",
        body: "Nothing is stored, nothing is sold. Leuk reads only what you've already made public. Everything else is yours.",
    },
];

export default function Features() {
    return (
        <section id="features" className="w-full py-20">
            <div className="mx-auto max-w-5xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Work <span className="italic text-emerald-800">only</span>. No <span className="italic text-emerald-800">noise</span>.
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        Everything built around a single idea: your work deserves to be read.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
                        >
                            {/* Icon */}
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-zinc-400 transition-colors duration-300 group-hover:bg-emerald-500/10 group-hover:text-emerald-400">
                                {f.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-base font-semibold text-zinc-100">
                                    {f.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                                    {f.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/" 
                        className="inline-block rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-zinc-100"
                    >
                        See it in action →
                    </Link>
                </div>
            </div>
        </section>
    );
}
