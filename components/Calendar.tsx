'use client'

import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function Calendar({ username }: { username: string }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="min-h-[140px] w-full" />
    }

    return (
        <div>
            <GitHubCalendar fontSize={12} className="text-zinc-500" blockSize={9.9} username={username} />
        </div>
    )
}