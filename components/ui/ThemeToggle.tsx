"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex h-8 w-8 items-center justify-center border border-neutral-300 dark:border-neutral-700" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-8 w-8 items-center justify-center border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-50 cursor-pointer"
    >
      <Sun
        size={18}
        aria-hidden="true"
        className={`absolute transition-all duration-300 ${isDark ? "scale-0" : "scale-100"}`}
      />
      <Moon
        size={18}
        aria-hidden="true"
        className={`absolute transition-all duration-300 ${isDark ? "scale-100" : "scale-0"}`}
      />
    </button>
  );
}
