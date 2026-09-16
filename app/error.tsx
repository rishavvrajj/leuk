"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const msg = error.message?.toLowerCase() ?? "";
  const isRateLimit = msg.includes("rate limit") || msg.includes(" for forbidden");

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-950 px-6 py-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 text-6xl">⚠️</div>
        <h1 className="text-3xl font-bold text-zinc-50">
          {isRateLimit ? "Rate limit hit" : "Something went wrong"}
        </h1>
        <p className="mt-3 text-zinc-400">
          {isRateLimit
            ? "GitHub rate limit reached. Try again in an hour."
            : "We couldn&apos;t load this portfolio. Please try again."}
        </p>
        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-zinc-950 transition hover:bg-emerald-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}