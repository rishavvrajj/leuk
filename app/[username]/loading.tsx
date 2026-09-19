export default function Loading() {
  return (
    <main className="flex-1 bg-zinc-950 px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl space-y-12 sm:space-y-14 animate-pulse">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-6 mb-10">
          <div className="h-3 w-16 rounded bg-zinc-900" />
          <div className="h-6 w-20 rounded bg-zinc-900" />
        </div>

        {/* Identity Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-zinc-900 shrink-0" />
          <div className="flex-1 space-y-2.5">
            <div className="h-7 w-48 rounded bg-zinc-900" />
            <div className="h-4 w-28 rounded bg-zinc-900" />
            <div className="h-3 w-40 rounded bg-zinc-900 mt-2" />
          </div>
        </div>

        {/* About Skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-14 rounded bg-zinc-900" />
          <div className="h-4 w-full rounded bg-zinc-900" />
          <div className="h-4 w-3/4 rounded bg-zinc-900" />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-4 space-y-2"
            >
              <div className="h-3 w-16 rounded bg-zinc-900" />
              <div className="h-6 w-12 rounded bg-zinc-900" />
            </div>
          ))}
        </div>

        {/* Languages Skeleton */}
        <div className="space-y-3">
          <div className="h-3 w-20 rounded bg-zinc-900" />
          <div className="h-1.5 w-full rounded-full bg-zinc-900" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-4 w-24 rounded bg-zinc-900" />
            ))}
          </div>
        </div>

        {/* Repositories Skeleton */}
        <div className="space-y-3">
          <div className="h-3 w-24 rounded bg-zinc-900" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-800/60 bg-zinc-900/20 p-5 space-y-3"
              >
                <div className="h-4 w-32 rounded bg-zinc-900" />
                <div className="h-3 w-full rounded bg-zinc-900" />
                <div className="h-3 w-2/3 rounded bg-zinc-900" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}