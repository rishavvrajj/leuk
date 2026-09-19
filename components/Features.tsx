import Image from 'next/image'

const CARDS = [
    {
        img: "/f1.svg",
        title: "Real work, not résumés",
        body: "Leuk reads the public work you've already shipped and arranges it into a living a1ile, no bullet points, no noise.",
    },
    {
        img: "/f2.svg",
        title: "Zero setup",
        body: "Drop in your GitHub handle. No database, no dashboards to feed, no profile to babysit. That was the hard part.",
    },
    {
        img: "/f3.svg",
        title: "Updates itself",
        body: "Every push, every star, every contribution becomes part of your story. Your presence moves the way you do.",
    },
    {
        img: "/f4.svg",
        title: "Private by default",
        body: "Nothing is stored, nothing is sold. Leuk reads only what you've already made public. Everything else is yours.",
    },
]

export default function Features() {
    return (
        <section id="Features" className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
            <div className="space-y-10 sm:space-y-12">
                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center px-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
                        Work <span className="italic text-emerald-800">only</span>. No <span className="italic text-emerald-800">noise</span>.
                    </h2>
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-zinc-400">
                        Everything built around a single idea: your work deserves to be read.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            className="group flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-4 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] sm:aspect-[4/5] w-full overflow-hidden rounded-lg bg-zinc-950 flex items-center justify-center">
                                <Image
                                    width={300}
                                    height={300}
                                    src={card.img}
                                    alt=""
                                    className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-1 flex-col items-start justify-start gap-1.5 pt-4 pb-2">
                                <h3 className="text-sm sm:text-base font-semibold text-zinc-100">
                                    {card.title}
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                                    {card.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}