import React from 'react'

export default function Footer() {
  return (
    <div>
        
      {/* ─── Footer ─── */}
      <footer className="border-t border-zinc-800/60 mx-20 py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-zinc-600 transition duration-300 hover:text-zinc-300 cursor-pointer">
            © {new Date().getFullYear()} Leuk
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a target='_blank' href="https://x.com/rishavvrajj" className="transition duration-300 hover:text-zinc-300">
              x
            </a>
            <a target='_blank' href="https://github.com/rishavvrajj" className="transition duration-300 hover:text-zinc-300">
              github
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/rishavv-rajj/" className="transition duration-300 hover:text-zinc-300">
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
