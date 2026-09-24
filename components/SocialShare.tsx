'use client'

import { useState } from 'react'

export default function SocialShare() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
    }
  }

  const handleShareTwitter = () => {
    const url = window.location.href
    const text = 'Check out my dev portfolio powered by @leuk'
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(twitterUrl, '_blank', 'width=500,height=400')
  }

  return (
    <section className="border border-zinc-800/60 px-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
          Share This Portfolio
        </h2>

        {/* Twitter */}
        <div className='flex items-center justify-center gap-4'>
          <button
            type="button"
            onClick={handleShareTwitter}
            className="group flex items-center justify-between rounded gap-2 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            aria-label="Share on Twitter"
          >
            <span className="text-xs text-zinc-400 group-hover:text-zinc-200">
              Share on Twitter
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
              <svg
                aria-hidden="true"
                className="h-2.5 w-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </span>
          </button>

          {/* Copy URL */}
          <button
            type="button"
            onClick={handleCopy}
            className="group flex items-center justify-between rounded gap-2 py-2.5 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            aria-label={copied ? 'URL copied' : 'Copy URL'}
          >
            <span className="text-xs text-zinc-400 group-hover:text-zinc-200">
              {copied ? 'Copied!' : 'Copy URL'}
            </span>
            <span className="flex items-center gap-1 font-mono text-xs text-zinc-500 group-hover:text-zinc-300">
              <svg
                aria-hidden="true"
                className="h-2.5 w-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}