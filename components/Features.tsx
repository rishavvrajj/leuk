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
        <section id="Features" className="w-full py-8 px-20">
            <div className="space-y-12">
                {/* Heading */}
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Work <span className="italic text-emerald-800">only</span>. No <span className="italic text-emerald-800">noise</span>.
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                        Everything built around a single idea: your work deserves to be read.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {CARDS.map((card) => (
                        <div
                            key={card.title}
                            className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-[4/5] w-full overflow-hidden bg-black">
                                <Image
                                    width={80}
                                    height={100}
                                    src={card.img}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-1 flex-col items-start justify-center gap-2 py-4">
                                <h3 className="text-md font-semibold text-zinc-100">
                                    {card.title}
                                </h3>
                                <p className="text-xs leading-relaxed text-zinc-500">
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