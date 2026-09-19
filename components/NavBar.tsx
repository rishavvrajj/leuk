'use client';

import { useState } from 'react';

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-xs">
      <nav className="mx-auto px-4 py-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#Home"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight transition-all duration-300 hover:scale-105"
        >
          <img src="/favicon.png" alt="Leuk Logo" className="w-6 h-6" />
        </a>

        {/* Desktop / Tablet NavLinks */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-zinc-900">
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-100 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#Home"
          >
            Home
          </a>
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-100 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#Features"
          >
            Features
          </a>
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-100 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#Beliefs"
          >
            Beliefs
          </a>
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-100 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#profiles"
          >
            Explore profiles
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-zinc-900 hover:bg-black/5 focus:outline-none"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/10 bg-white/70 backdrop-blur-md px-6 py-4 space-y-3 shadow-lg">
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-900 hover:text-emerald-800"
            href="#Home"
          >
            Home
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-900 hover:text-emerald-800"
            href="#Features"
          >
            Features
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-900 hover:text-emerald-800"
            href="#Beliefs"
          >
            Beliefs
          </a>
          <a
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-zinc-900 hover:text-emerald-800"
            href="#profiles"
          >
            Explore profiles
          </a>
        </div>
      )}
    </header>
  );
}
