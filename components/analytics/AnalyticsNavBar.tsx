"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SectionShell } from "@/components/ui/SectionShell";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "Beliefs", href: "/#beliefs" },
  { label: "Analyze", href: "/analyze" },
  { label: "Compare", href: "/compare" },
];

export function AnalyticsNavBar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        const element =
          document.getElementById(targetId) ||
          document.getElementById(targetId.toLowerCase()) ||
          document.getElementById(targetId.charAt(0).toUpperCase() + targetId.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href === "/") {
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

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
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-neutral-950 dark:text-neutral-50"
          >
            <Terminal size={18} aria-hidden="true" />
            Leuk
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/analyze"
            className="hidden min-h-8 items-center border border-neutral-950 bg-neutral-950 px-4 text-xs font-mono font-medium text-white transition-colors hover:bg-neutral-800 sm:inline-flex dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-300"
          >
            Analyze
          </Link>
          <Link
            href="/compare"
            className="hidden min-h-8 items-center border border-neutral-300 bg-white px-4 text-xs font-mono font-medium text-neutral-950 transition-colors hover:border-neutral-950 sm:inline-flex dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-50"
          >
            Compare
          </Link>

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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href);
                  setOpen(false);
                }}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-2">
              <Link
                href="/analyze"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex min-h-9 items-center justify-center border border-neutral-950 bg-neutral-950 px-4 text-xs font-mono font-medium text-white transition-colors hover:bg-neutral-800 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-300"
              >
                Analyze
              </Link>
              <Link
                href="/compare"
                onClick={() => setOpen(false)}
                className="flex-1 inline-flex min-h-9 items-center justify-center border border-neutral-300 bg-white px-4 text-xs font-mono font-medium text-neutral-950 transition-colors hover:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-50"
              >
                Compare
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
