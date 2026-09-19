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
        <section id="Features" className="flex items-center justify-center mx-4 sm:mx-8 md:mx-30 py-2 sm:py-16">
            <div className="space-y-10">
                {/* Heading */}
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
                        Work <span className="italic text-emerald-800">only</span>. No <span className="italic text-emerald-800">noise</span>.
                    </h2>
                    <p className="text-xs md:text-sm leading-relaxed italic text-zinc-400 text-center w-80">
                        Everything built around a single idea: your work deserves to be read.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            className="group gap-4 flex flex-col items-start justify-between transition-all duration-300 hover:border-zinc-700 hover:cursor-pointer hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative aspect-4/5 w-full overflow-hidden flex items-center justify-center">
                                <Image
                                    width={400}
                                    height={500}
                                    src={card.img}
                                    alt=""
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Text */}
                            <div className="space-y-1 md:h-20 lg:h-16">
                                <h3 className="text-xs md:text-sm font-semibold text-zinc-100">
                                    {card.title}
                                </h3>
                                <p className="text-[8px] md:text-[10px] leading-relaxed text-zinc-400">
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