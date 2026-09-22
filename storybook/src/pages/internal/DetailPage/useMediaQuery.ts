import { useEffect, useState } from 'react'

function getMediaQueryMatches(query: string): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  if (typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia(query).matches
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => getMediaQueryMatches(query))

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMatches(false)
      return
    }

    const mediaQueryList = window.matchMedia(query)
    setMatches(mediaQueryList.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    if (typeof mediaQueryList.addEventListener === 'function') {
      mediaQueryList.addEventListener('change', handleChange)
      // eslint-disable-next-line consistent-return
      return () => mediaQueryList.removeEventListener('change', handleChange)
    }

    // Safari < 14
    mediaQueryList.addListener(handleChange)
    // eslint-disable-next-line consistent-return
    return () => mediaQueryList.removeListener(handleChange)
  }, [query])

  return matches
}
