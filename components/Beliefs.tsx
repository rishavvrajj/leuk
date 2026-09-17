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
        <section id="Beliefs" className="w-full px-20 py-10">
            <div className="space-y-12">
                {/* Heading */}
                <div className="flex justify-between text-center">
                    <h2 className="text-3xl font-bold tracking-tight w-1/2 text-zinc-100 text-start">
                        <span className="text-7xl">What we</span><br /><span className="text-5xl italic text-emerald-800">believe</span> .
                    </h2>
                    <p className="text-sm pt-2 pl-4 leading-relaxed italic text-zinc-500 text-start w-1/2">
                        Leuk exists to give that story a home. We believe growth should be visible, progress should be celebrated, and builders should be able to look back at their journey with pride—not just at what they shipped, but at how far they’ve come.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-4 gap-8">
                    {BELIEFS.map((b) => (
                        <div
                            key={b.title}
                            className="flex flex-col h-100 items-center justify-between transition-all duration-300 hover:border-zinc-700 hover:cursor-pointer hover:-translate-y-1"
                        >
                            <div className="aspect-5/5 overflow-hidden">
                                <Image
                                    width={80}
                                    height={80}
                                    src={b.src}
                                    alt=""
                                    className="h-80 w-80 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="">
                                <h3 className="text-md font-semibold text-zinc-100">
                                    {b.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-500">
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