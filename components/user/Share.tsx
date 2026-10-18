'use client'

import { Share2 } from "lucide-react"
import { shareOnTwitter } from "@/lib/share"

export default function Share() {
    return (
        <div className="">
            <button
                type="button"
                onClick={() => shareOnTwitter()}
                className="group flex items-center justify-between cursor-pointer rounded gap-2 text-sm transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
                aria-label="Share on Twitter"
            >
                <Share2 className="text-zinc-400"/>
            </button>
        </div>
    )
}
