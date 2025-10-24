/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useLayoutEffect, useState } from 'react'

// TODO: we should set the breakpoint in JS somewhere and render this and the sass variables from that
export const BREAKPOINTS = {
  medium: '36rem',
  wide: '68rem',
}

type useIsAfterBreakpointProps = 'medium' | 'wide'

const useIsAfterBreakpoint = (breakpoint: useIsAfterBreakpointProps) => {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    // Check for window object to avoid SSR issues
    if (breakpoint && typeof window !== 'undefined') {
      const media = window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]})`)

      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => setMatches(media.matches)

      window.addEventListener('resize', listener)

      return () => window.removeEventListener('resize', listener)
    }

    return undefined
  }, [matches, breakpoint])

  return matches
}

export default useIsAfterBreakpoint
