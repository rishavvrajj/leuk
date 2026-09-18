'use client'

import { useEffect, useRef } from "react";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let mouseX = -1000;
        let mouseY = -1000;

        const updateSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        updateSize();

        const resizeObserver = new ResizeObserver(() => {
            updateSize();
        });
        resizeObserver.observe(canvas);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const spacing = 12;
            const influence = 90;

            for (let y = 6; y < height; y += spacing) {
                for (let x = 6; x < width; x += spacing) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    const strength = Math.max(0, 1 - distance / influence);

                    const dotSize = 0.8 + strength * 1.4;
                    // Refined zinc-400 / zinc-100 style dots matching the dark theme
                    const opacity = 0.08 + strength * 0.45;

                    ctx.beginPath();
                    ctx.arc(x, y, dotSize, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(245, 245, 245, ${opacity})`;
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        draw();

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="block h-full w-full bg-zinc-950"
        />
    );
}