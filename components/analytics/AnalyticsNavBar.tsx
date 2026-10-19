"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SectionShell } from "@/components/ui/SectionShell";

export function AnalyticsNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SectionShell
        as="header"
        containerClassName="sticky top-4 z-200 h-14"
        contentClassName="flex items-center justify-between h-full w-full px-4 sm:px-8"
      >
        <div className="flex items-center justify-between gap-12 lg:gap-24">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50"
          >
            <Terminal size={18} aria-hidden="true" />
            Leuk
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden min-h-8 items-center gap-1.5 border border-neutral-300 bg-white px-3 text-xs font-mono text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 sm:inline-flex dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-50 dark:hover:text-neutral-50 rounded-xs"
          >
            <ArrowLeft size={13} />
            <span>Home</span>
          </Link>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 md:hidden dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-50 rounded-xs"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </SectionShell>
      {open && (
        <div
          id="mobile-navigation"
          className="absolute top-14 left-0 w-full bg-neutral-100/95 backdrop-blur-md border-b border-neutral-200 p-4 md:hidden dark:bg-neutral-950/95 dark:border-neutral-800 z-300 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-9 items-center justify-center gap-1.5 border border-neutral-300 bg-white px-4 text-xs font-mono text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              <ArrowLeft size={13} />
              <span>Home</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
