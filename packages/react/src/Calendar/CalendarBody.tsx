/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import type { CalendarProps } from './Calendar'

export type CalendarBodyProps = {
  /** The month to display. */
  readonly month: Date
} & Pick<CalendarProps, 'linkComponent' | 'linkTemplate' | 'locale'>

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

const DefaultDateLink = (anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...anchorProps} />

export const CalendarBody = ({ linkComponent, linkTemplate, locale, month }: CalendarBodyProps) => {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const today = new Date()

  const firstWeekday = (new Date(year, monthIndex, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()

  const DateLink = linkComponent ?? DefaultDateLink

  return (
    <div className="ams-calendar__body">
      {Array.from({ length: 7 }).map((_, index) => {
        const date = new Date(2026, 5, 1 + index) // 2026-06-01 is a Monday
        const weekday = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

        return (
          <span className="ams-calendar__weekday" key={`weekday-${index}`}>
            {weekday}
          </span>
        )
      })}
      {Array.from({ length: firstWeekday }).map((_, index) => (
        <span key={`offset-${index}`} />
      ))}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1
        const date = new Date(year, monthIndex, day)
        const isCurrent = isSameDay(date, today)
        const href = linkTemplate?.(date)

        if (href === undefined) {
          return (
            <span
              aria-current={isCurrent ? 'date' : undefined}
              className={clsx('ams-calendar__day', isCurrent && 'ams-calendar__day--current')}
              key={day}
            >
              {day}
            </span>
          )
        }

        const accessibleDate = new Intl.DateTimeFormat(locale, {
          day: 'numeric',
          month: 'long',
          weekday: 'long',
          year: 'numeric',
        }).format(date)

        return (
          <DateLink
            aria-current={isCurrent ? 'date' : undefined}
            className={clsx('ams-calendar__day-link', isCurrent && 'ams-calendar__day-link--current')}
            href={href}
            key={day}
          >
            <span aria-hidden={true}>{day}</span>
            <span className="ams-visually-hidden">{accessibleDate}</span>
          </DateLink>
        )
      })}
    </div>
  )
}

CalendarBody.displayName = 'CalendarBody'
