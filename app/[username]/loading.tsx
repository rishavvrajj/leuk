export default function Loading() {
  return (
    <main className="flex-1 bg-zinc-950 px-6 py-10">
      <div className="mx-auto w-full max-w-5xl animate-pulse">
        {/* header meta */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="h-4 w-48 rounded bg-zinc-800" />
          <div className="h-9 w-24 rounded-lg bg-zinc-800" />
        </div>

        {/* hero */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <div className="h-32 w-32 shrink-0 rounded-2xl bg-zinc-800" />
            <div className="flex-1 space-y-3">
              <div className="h-8 w-44 rounded bg-zinc-800" />
              <div className="h-4 w-24 rounded bg-zinc-800" />
              <div className="h-4 w-full max-w-xl rounded bg-zinc-800" />
              <div className="h-4 w-2/3 rounded bg-zinc-800" />
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
            >
              <div className="h-3 w-20 rounded bg-zinc-800" />
              <div className="mt-3 h-7 w-16 rounded bg-zinc-800" />
            </div>
          ))}
        </div>

        {/* language */}
        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <div className="mb-5 h-5 w-40 rounded bg-zinc-800" />
          <div className="h-2.5 w-full rounded-full bg-zinc-800" />
          <div className="mt-4 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-zinc-800" />
                <div className="h-3 w-28 rounded bg-zinc-800" />
                <div className="h-1.5 flex-1 rounded-full bg-zinc-800" />
              </div>
            ))}
          </div>
        </div>

        {/* repos */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
            >
              <div className="h-4 w-32 rounded bg-zinc-800" />
              <div className="mt-3 h-3 w-full rounded bg-zinc-800" />
              <div className="mt-2 h-3 w-3/4 rounded bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}