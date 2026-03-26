/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useSyncExternalStore } from 'react'

const relativeTimeFormatter = new Intl.RelativeTimeFormat('nl-NL', { numeric: 'always' })

/** Units from largest to smallest, with the number of seconds in each. */
const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
  ['year', 60 * 60 * 24 * 365],
  ['month', 60 * 60 * 24 * 30],
  ['week', 60 * 60 * 24 * 7],
  ['day', 60 * 60 * 24],
  ['hour', 60 * 60],
  ['minute', 60],
]

/**
 * Formats the difference between a timestamp and now as a human-readable Dutch string.
 * Returns an empty string when the timestamp is invalid.
 */
const formatRelativeTime = (date: Date | number, now: number): string => {
  const timestamp = date instanceof Date ? date.getTime() : date
  const elapsedSeconds = (timestamp - now) / 1000

  if (!Number.isFinite(elapsedSeconds)) {
    return ''
  }

  // Below a minute, a friendlier phrase than counting seconds.
  if (Math.abs(elapsedSeconds) < 60) {
    return elapsedSeconds < 0 ? 'minder dan 1 minuut geleden' : 'over minder dan 1 minuut'
  }

  for (const [unit, secondsInUnit] of units) {
    if (Math.abs(elapsedSeconds) >= secondsInUnit) {
      return relativeTimeFormatter.format(Math.round(elapsedSeconds / secondsInUnit), unit)
    }
  }

  /* v8 ignore next -- Unreachable: the sub-minute guard above covers everything below one minute */
  return ''
}

// A store holding the current time, shared by every hook instance and ticking every 30 seconds.
// getSnapshot must return a stable value between ticks, so it reads a cached time rather than Date.now().
let now = Date.now()
const listeners = new Set<() => void>()
let intervalId: ReturnType<typeof setInterval> | undefined

const subscribe = (listener: () => void): (() => void) => {
  if (listeners.size === 0) {
    now = Date.now()
    intervalId = setInterval(() => {
      now = Date.now()
      listeners.forEach((notify) => notify())
    }, 30_000)
  }

  listeners.add(listener)

  return () => {
    listeners.delete(listener)

    if (listeners.size === 0 && intervalId !== undefined) {
      clearInterval(intervalId)
      intervalId = undefined
    }
  }
}

const getSnapshot = (): number => now

// Relative time cannot be known on the server, so render nothing there and on the first, matching
// client render; the real value appears right after hydration. NaN makes formatRelativeTime return ''.
const getServerSnapshot = (): number => Number.NaN

/**
 * A React hook that returns a live-updating relative time string in Dutch.
 *
 * Handles past and future times, and rolls up through minutes, hours, days, weeks, months, and years.
 * Updates every 30 seconds. Returns an empty string for an invalid time, and on the server.
 *
 * @param date - A `Date` object or a numeric timestamp to measure from.
 * @returns A human-readable string like '3 minuten geleden' or 'over 1 uur'.
 * @example const label = useRelativeTime(post.createdAt) // '5 minuten geleden'
 */
export const useRelativeTime = (date: Date | number): string => {
  const currentTime = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return formatRelativeTime(date, currentTime)
}
