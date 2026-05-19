'use client'

import { useRef, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface DotPatternProps {
  className?: string
  dotColor?: string
  dotSize?: number
  gap?: number
  fade?: boolean
}

function DotPattern({
  className,
  dotColor = 'rgba(255,255,255,0.08)',
  dotSize = 1.5,
  gap = 28,
  fade = true,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, rect.width, rect.height)

    const cols = Math.floor(rect.width / gap) + 1
    const rows = Math.floor(rect.height / gap) + 1

    const time = Date.now() / 3000

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap + (gap / 2)
        const y = j * gap + (gap / 2)

        const dx = Math.sin(time + i * 0.3 + j * 0.2) * 2
        const dy = Math.cos(time + j * 0.3 + i * 0.2) * 2

        const distFromCenter = Math.sqrt(
          Math.pow((x / rect.width - 0.5) * 2, 2) +
            Math.pow((y / rect.height - 0.5) * 2, 2),
        )

        let alpha = 1
        if (fade) {
          alpha = Math.max(0, 1 - distFromCenter * 1.2)
        }

        ctx.beginPath()
        ctx.arc(x + dx, y + dy, dotSize, 0, Math.PI * 2)
        ctx.fillStyle = dotColor.replace(/[\d.]+\)$/, `${alpha})`)
        ctx.fill()
      }
    }

    animationFrameRef.current = requestAnimationFrame(draw)
  }, [dotColor, dotSize, gap, fade])

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animationFrameRef.current)
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      aria-hidden="true"
    />
  )
}

export { DotPattern }
export type { DotPatternProps }
