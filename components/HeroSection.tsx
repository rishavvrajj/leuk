import NavBar from './NavBar'

export default function HeroSection() {
    return (
        <section id='Home' className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
            <NavBar />
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <img src="/bg.png" alt="" className='object-fill h-full w-full backdrop-blur-3xl' />
            </div>

            <div className="relative z-10 mx-auto space-y-5">

                <h1 className="text-3xl md:text-5xl font-bold tracking-normal text-zinc-900">
                    Your work is already speaking.{" "}
                    <br className="hidden sm:block" />
                    <span className=''>
                        Almost no one can{" "}
                        <span className="italic text-emerald-800">hear</span> it.
                    </span>
                </h1>

                <p className="mx-auto max-w-xl text-sm leading-relaxed tracking-tighter text-zinc-800">
                    Somewhere in your commit history is proof of who you&apos;re becoming
                    the 2 a.m.&nbsp;fixes, the abandoned experiments, the repo you
                    keep returning to. It&apos;s all there. It just has nowhere to
                    live.
                </p>

                <div className="mx-auto flex w-full max-w-105 items-center gap-2 rounded-full border border-black/50 backdrop-blur-sm p-1 shadow-sm transition focus-within:border-black/40 focus-within:ring-4 focus-within:ring-black/5">
                    <input
                        type="text"
                        placeholder="eg. rishavvrajj"
                        className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-black outline-none placeholder:text-black/40"
                    />

                    <button
                        type="button"
                        className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:cursor-pointer hover:bg-zinc-800 hover:shadow-md active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                    >
                        Create
                    </button>
                </div>

                <p className="text-sm text-zinc-800">
                    No forms. No rehearsing. Your GitHub is the whole story.
                </p>
            </div>
        </section>
    )
}
