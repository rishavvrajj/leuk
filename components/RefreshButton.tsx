"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function RefreshButton({ username }: { username: string }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  async function handleRefresh() {
    setError(null);
    try {
      const res = await fetch(`/api/refresh/${username}`, { method: "POST" });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setError(body?.error ?? `Refresh failed (${res.status})`);
        return;
      }
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("Network error");
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleRefresh}
        disabled={pending}
        aria-label="Refresh GitHub data"
        className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800/80 bg-zinc-900/40 px-2.5 py-1 text-xs font-mono text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-800/40 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <svg
          aria-hidden="true"
          className={`h-3 w-3 ${pending ? "animate-spin text-zinc-200" : "text-zinc-500"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
        </svg>
        <span>{pending ? "Refreshing…" : "Refresh"}</span>
      </button>
      {error && (
        <span className="text-[11px] font-mono text-red-400">{error}</span>
      )}
    </div>
  );
}
