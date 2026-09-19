import Image from "next/image";

const BELIEFS = [
    {
        title: "Craft deserves a stage.",
        body: "The internet should reward the thing made well, not the thing made loudest.",
        src: "/a1.svg"
    },
    {
        title: "A portfolio should breathe.",
        body: "Your work changes daily. A PDF written once can't keep up.",
        src: "/a2.svg"
    },
    {
        title: "Your work belongs to you.",
        body: "No setup marathons. No maintenance tax. No gatekeepers.",
        src: "/a3.svg"
    },
    {
        title: "Simplicity is respect.",
        body: "The work is complex enough. The frame around it shouldn't be.",
        src: "/a4.svg"
    },
];

export default function Beliefs() {
    return (
        <section id="Beliefs" className="flex items-center justify-center mx-4 sm:mx-8 md:mx-30 py-2 sm:py-16">
            <div className="space-y-4 sm:space-y-12">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                    <h2 className="text-5xl font-bold tracking-tight text-zinc-100 text-left w-full md:w-1/2">
                        <span className="text-4xl sm:text-6xl lg:text-7xl block">What we</span>
                        <span className="text-3xl sm:text-5xl lg:text-5xl italic text-emerald-800">believe</span> .
                    </h2>
                    <p className="hidden lg:block text-xs md:text-sm leading-relaxed italic text-zinc-400 text-left w-full md:w-1/2">
                        Leuk exists to give that story a home. We believe growth should be visible, progress should be celebrated, and builders should be able to look back at their journey with pride—not just at what they shipped, but at how far they’ve come.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {BELIEFS.map((b) => (
                        <div
                            key={b.title}
                            className="group gap-4 flex flex-col items-start justify-between transition-all duration-300 hover:border-zinc-700 hover:cursor-pointer hover:-translate-y-1"
                        >
                            <div className="relative aspect-square w-full overflow-hidden flex items-center justify-center">
                                <Image
                                    width={400}
                                    height={500}
                                    src={b.src}
                                    alt=""
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-1 md:h-20 lg:h-16">
                                <h3 className="text-xs md:text-sm font-semibold text-zinc-100">
                                    {b.title}
                                </h3>
                                <p className="text-[8px] md:text-xs leading-relaxed text-zinc-400">
                                    {b.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}