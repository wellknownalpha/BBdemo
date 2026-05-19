'use client'

import { useState, useEffect, useCallback } from 'react'

interface ScrollState {
  x: number
  y: number
  direction: 'up' | 'down' | null
  isAtTop: boolean
  isAtBottom: boolean
}

function useScroll(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    x: 0,
    y: 0,
    direction: null,
    isAtTop: true,
    isAtBottom: false,
  })

  const handleScroll = useCallback(() => {
    setState((prev) => {
      const x = window.scrollX
      const y = window.scrollY
      const direction = y > prev.y ? 'down' : y < prev.y ? 'up' : prev.direction
      const isAtTop = y === 0
      const isAtBottom =
        window.innerHeight + Math.ceil(y) >= document.documentElement.scrollHeight

      return { x, y, direction, isAtTop, isAtBottom }
    })
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return state
}

export { useScroll }
export type { ScrollState }
