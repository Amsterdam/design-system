/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useEffect, useState } from 'react'

// TODO: we should set the breakpoint in JS somewhere and render this and the sass variables from that
export const BREAKPOINTS = {
  medium: '37.5rem',
  wide: '72.5rem',
} as const

type Breakpoint = keyof typeof BREAKPOINTS

const useIsAfterBreakpoint = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check for window object to avoid SSR issues
    if (typeof window === 'undefined') {
      // Return stable no-op cleanup to satisfy consistent-return
      return () => {}
    }

    const query = `(min-width: ${BREAKPOINTS[breakpoint]})`
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    // Set initial state
    setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => {
      media.removeEventListener('change', listener)
    }
  }, [breakpoint])

  return matches
}

export default useIsAfterBreakpoint
