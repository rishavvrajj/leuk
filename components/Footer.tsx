import React from 'react'

export default function Footer() {
  return (
    <div>
        
      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/60 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Leuk
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#beliefs" className="transition hover:text-zinc-300">
              Beliefs
            </a>
            <a href="/" className="transition hover:text-zinc-300">
              Get started
            </a>
          </div>
        </div>
      </footer>
    </div>

  )
}
