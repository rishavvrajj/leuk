'use client'

import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

export default function Calendar({ username }: { username: string }) {
    const [mounted, setMounted] = useState(false)
    const [fontSize, setFontSize] = useState(12)
    const [blockSize, setBlockSize] = useState(9.9)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth
            if (width < 640) {
                // mobile
                setFontSize(10)
                setBlockSize(8)
            } else if (width < 768) {
                // iPad mini
                setFontSize(11)
                setBlockSize(8.5)
            } else if (width < 1024) {
                // iPad pro
                setFontSize(12)
                setBlockSize(9)
            } else if (width < 1280) {
                // laptop
                setFontSize(13)
                setBlockSize(9.5)
            } else {
                // large screen
                setFontSize(14)
                setBlockSize(9.9)
            }
        }

        // Initial check
        updateSize()
        window.addEventListener('resize', updateSize)
        return () => window.removeEventListener('resize', updateSize)
    }, [])

    if (!mounted) {
        return <div className="min-h-[140px] w-full" />
    }

    return (
        <div className='w-full overflow-clip'>
            <GitHubCalendar
                fontSize={fontSize}
                className="text-zinc-500"
                blockSize={blockSize}
                username={username}
            />
        </div>
    )
}