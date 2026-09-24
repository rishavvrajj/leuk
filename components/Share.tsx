'use client'

import { Share2 } from "lucide-react"

export default function Share() {

    const handleShareTwitter = () => {
        const url = window.location.href
        const text = 'Check out my dev portfolio powered by @leuk'
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        window.open(twitterUrl, '_blank', 'width=500,height=400')
    }

    return (
        <div className="">
            <button
                type="button"
                onClick={handleShareTwitter}
                className="group flex items-center justify-between cursor-pointer rounded gap-2 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                aria-label="Share on Twitter"
            >
                <Share2 className="text-zinc-400"/>
            </button>
        </div>
    )
}
