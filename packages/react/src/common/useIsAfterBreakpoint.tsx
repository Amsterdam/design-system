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

/**
 * Hook to determine if the viewport width is at or beyond a given breakpoint.
 *
 * **Prefer CSS media queries over this hook.** Use this only when viewport-dependent
 * logic must run in JavaScript, e.g. for interactions or dynamic behaviour that cannot
 * be expressed in CSS. CSS media queries are more performant, better supported across
 * stacks, and easier to maintain.
 *
 * @param breakpoint - The breakpoint to match against: `'medium'` or `'wide'`.
 * @returns `true` if the viewport width meets or exceeds the breakpoint, `false` otherwise.
 */
const useIsAfterBreakpoint = (breakpoint: Breakpoint) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check for window object to avoid SSR issues
    if (typeof window === 'undefined') return undefined

    const query = `(min-width: ${BREAKPOINTS[breakpoint]})`
    const media = window.matchMedia(query)
    const listener = () => setMatches(media.matches)

    // Set initial state
    setMatches(media.matches)

    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [breakpoint])

  return matches
}

export default useIsAfterBreakpoint
