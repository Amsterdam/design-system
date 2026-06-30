/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useCallback, useSyncExternalStore } from 'react'

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
const useViewportHasMinWidth = (breakpoint: Breakpoint) => {
  const query = `(min-width: ${BREAKPOINTS[breakpoint]})`

  const subscribe = useCallback(
    (callback: () => void) => {
      /* v8 ignore next -- No window object in a server-side rendering environment */
      if (typeof window === 'undefined') return () => {}
      const media = window.matchMedia(query)
      media.addEventListener('change', callback)
      return () => media.removeEventListener('change', callback)
    },
    [query],
  )

  const getSnapshot = useCallback(() => {
    /* v8 ignore next -- No window object in a server-side rendering environment */
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  }, [query])

  /* v8 ignore next -- SSR snapshot: assume the viewport does not match; components render their default state on the server */
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}

export default useViewportHasMinWidth
