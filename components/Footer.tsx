import React from 'react'

export default function Footer() {
  return (
    <div className="w-full">
      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/60 mx-4 sm:mx-8 md:mx-30 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[8px] md:text-xs text-zinc-500 transition duration-300 hover:text-zinc-300 cursor-pointer">
            © {new Date().getFullYear()} Leuk
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-[8px] md:text-xs text-zinc-500">
            <a target='_blank' rel="noreferrer" href="https://x.com/rishavvrajj" className="transition duration-300 hover:text-zinc-300">
              x
            </a>
            <a target='_blank' rel="noreferrer" href="https://github.com/rishavvrajj" className="transition duration-300 hover:text-zinc-300">
              github
            </a>
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rishavv-rajj/" className="transition duration-300 hover:text-zinc-300">
              linkedin
            </a>
            <a href="#Home" className="transition duration-300 hover:text-zinc-300">
              Get started
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
