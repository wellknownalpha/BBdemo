'use client'

import { useState, useEffect, useCallback } from 'react'

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false)

  const handleChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches)
  }, [])

  useEffect(() => {
    const mql = window.matchMedia(query)
    setMatches(mql.matches)
    mql.addEventListener('change', handleChange)
    return () => mql.removeEventListener('change', handleChange)
  }, [query, handleChange])

  return matches
}

export { useMediaQuery }
