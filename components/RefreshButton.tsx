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
        setError(
          body?.error ??
            `Refresh failed (${res.status}). Try again in an hour.`
        );
        return;
      }
      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("Network error while refreshing.");
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleRefresh}
        disabled={pending}
        className="rounded-lg border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-sm font-medium text-zinc-300 backdrop-blur transition hover:border-emerald-500 hover:text-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-zinc-500 border-t-emerald-400 align-middle" />
            <span className="ml-2 align-middle">Updating…</span>
          </>
        ) : (
          "↻ Refresh"
        )}
      </button>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}