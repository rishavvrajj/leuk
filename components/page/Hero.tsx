import { useState } from "react";
import { Sparkles } from "lucide-react";
import { SectionShell } from "@/components/ui/SectionShell";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function Hero() {
  const [userName, setUserName] = useState('')
  return (
    <SectionShell id="Home" className="px-4 py-16 sm:px-6 sm:py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 border border-neutral-200 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
          <Sparkles size={14} aria-hidden="true" />
          A living developer profile
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl md:text-7xl dark:text-neutral-50">
          Your work is already speaking.
          <span className="block text-neutral-500 dark:text-neutral-400">
            Let it be heard.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
          Leuk turns your GitHub into a living developer profile. No forms. No
          rehearsing. Just the work you’ve already shipped.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-neutral-500 sm:text-base dark:text-neutral-500">
          Your commit history holds proof of who you’re becoming — the late-night
          fixes, the abandoned experiments, the repo you keep returning to. Leuk
          gives that story a place to live.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="flex w-lg">
            <input
              type="text"
              placeholder="Enter GitHub username"
              onChange={(event) => setUserName(event.target.value)}
              className="w-full px-8 border border-neutral-300 text-sm dark:border-neutral-700 focus:outline-none focus:ring-0"
            />
            <PrimaryButton
              className="right-0 top-0 h-full w-md"
              href={`/${userName}`}
            >
              Create your profile
            </PrimaryButton>
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-neutral-500 dark:text-neutral-500">
          Drop in a GitHub handle. That’s it.
        </p>
      </div>
    </SectionShell>
  );
}