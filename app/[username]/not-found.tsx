import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-950 px-6 py-24">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 text-6xl">🔍</div>
        <h1 className="text-3xl font-bold text-zinc-50">No such GitHub user</h1>
        <p className="mt-3 text-zinc-400">
          We couldn&apos;t find that account. Double-check the username or try
          someone else.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-xl px-6 py-3 font-medium text-black bg-white/30 transition hover:bg-white/60 hover:text-black"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}