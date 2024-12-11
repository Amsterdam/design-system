import { useEffect, useState } from 'react'

// TODO: we should set the breakpoint in JS somewhere and render this and the sass variables from that
const breakpoints = {
  medium: '36rem',
  wide: '68rem',
}

type useMediaQueryProps = 'medium' | 'wide'

const useMediaQuery = (breakpoint: useMediaQueryProps) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Check for window object to avoid SSR issues
    if (breakpoint && typeof window !== 'undefined') {
      const media = window.matchMedia(`(min-width: ${breakpoints[breakpoint]})`)

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

export default useMediaQuery
