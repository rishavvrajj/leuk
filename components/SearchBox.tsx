"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const USERNAME_RE = /^[a-zA-Z0-9-]{1,39}$/;

export default function SearchBox() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Strip a leading "@" the user may have typed.
    const raw = value.trim().replace(/^@/, "");
    if (!raw) {
      setError("Enter a GitHub username.");
      return;
    }
    const normalized = raw.toLowerCase();
    if (!USERNAME_RE.test(normalized)) {
      setError(
        "Usernames can only contain letters, numbers, and hyphens (1–39 chars)."
      );
      return;
    }
    setError(null);
    router.push(`/${normalized}`);
  }

  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. torvalds"
          aria-label="GitHub username"
          className="h-14 flex-1 rounded-xl border border-zinc-800 bg-zinc-900/70 px-5 text-lg text-zinc-100 placeholder-zinc-500 outline-none backdrop-blur transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
        />
        <button
          type="submit"
          className="h-14 rounded-xl bg-emerald-500 px-8 text-lg font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 active:scale-[0.98]"
        >
          Generate ✦
        </button>
      </form>
      {error && (
        <p
          role="alert"
          className="mt-2 text-sm text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}