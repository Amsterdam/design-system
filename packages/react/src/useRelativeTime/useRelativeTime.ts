/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useEffect, useState } from 'react'

/**
 * Formats the difference between a timestamp and now as a human-readable Dutch string.
 */
const formatRelativeTime = (date: Date | number, now: number): string => {
  const timestamp = date instanceof Date ? date.getTime() : date
  const diffMs = now - timestamp
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMinutes < 1) return 'minder dan 1 minuut geleden'
  if (diffMinutes === 1) return '1 minuut geleden'
  if (diffMinutes < 60) return `${diffMinutes} minuten geleden`
  if (diffHours === 1) return '1 uur geleden'
  if (diffHours < 24) return `${diffHours} uur geleden`
  if (diffDays === 1) return '1 dag geleden'

  return `${diffDays} dagen geleden`
}

/**
 * A React hook that returns a live-updating relative time string in Dutch.
 *
 * Updates every 30 seconds.
 *
 * @param date - A `Date` object or a numeric timestamp to measure from.
 * @returns A human-readable string like 'minder dan 1 minuut geleden' or '3 minuten geleden'.
 * @example const label = useRelativeTime(post.createdAt) // '5 minuten geleden'
 */
export const useRelativeTime = (date: Date | number): string => {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000)

    return () => clearInterval(id)
  }, [])

  return formatRelativeTime(date, now)
}
