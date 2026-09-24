import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-950 px-6 py-24 min-h-screen">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 text-6xl">🔍</div>
        <h1 className="text-3xl font-bold text-zinc-100">No such GitHub user</h1>
        <p className="mt-3 text-sm text-zinc-400 font-mono">
          We couldn&apos;t find that account. Double-check the username or try
          someone else.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-md border border-zinc-800/80 bg-zinc-900/40 px-6 py-3 text-sm font-mono text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}