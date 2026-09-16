const BELIEFS = [
    {
        title: "Craft deserves a stage.",
        body: "The internet should reward the thing made well, not the thing made loudest.",
    },
    {
        title: "A portfolio should breathe.",
        body: "Your work changes daily. A PDF written once can't keep up.",
    },
    {
        title: "Your work belongs to you.",
        body: "No setup marathons. No maintenance tax. No gatekeepers.",
    },
    {
        title: "Simplicity is respect.",
        body: "The work is complex enough. The frame around it shouldn't be.",
    },
];

export default function Work() {
    return (
        <section id="beliefs" className="w-full pb-10">
            <div className="mx-auto max-w-5xl px-6">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        What we <span className="italic text-emerald-800">believe</span>.
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        The principles behind every decision we make.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {BELIEFS.map((b) => (
                        <div
                            key={b.title}
                            className="flex flex-col gap-2 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
                        >
                            <h3 className="text-base font-semibold text-zinc-100">
                                {b.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-500">
                                {b.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
