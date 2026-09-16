import SearchBox from "@/components/SearchBox";

const STEPS = [
  {
    n: "1",
    title: "Search",
    desc: "Type any GitHub username.",
    icon: "🔍",
  },
  {
    n: "2",
    title: "Generate",
    desc: "We fetch their public repos live.",
    icon: "⚡",
  },
  {
    n: "3",
    title: "Share",
    desc: "A beautiful page at /username.",
    icon: "🔗",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-zinc-950 px-6 py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Live from GitHub&apos;s REST API
        </div>

        <h1 className="text-5xl font-black tracking-tight sm:text-7xl">
          <span className="text-emerald-400">leuk</span>
        </h1>
        <p className="mt-4 max-w-md text-lg text-zinc-400 sm:text-xl">
          Type a GitHub username. Get a portfolio. Instantly.
        </p>

        <div className="mt-10 flex w-full justify-center">
          <SearchBox />
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 text-left backdrop-blur transition hover:border-emerald-500/50"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 text-xl">
                {s.icon}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-emerald-400">
                  {s.n}.
                </span>
                <h3 className="font-semibold text-zinc-100">{s.title}</h3>
              </div>
              <p className="mt-1 text-sm text-zinc-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}