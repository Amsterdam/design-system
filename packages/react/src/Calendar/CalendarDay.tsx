/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import type { CalendarProps } from './Calendar'

export type CalendarDayProps = {
  /** The date to display. */
  readonly date: Date
  /** Whether this date is today. */
  readonly isCurrent: boolean
} & Pick<CalendarProps, 'linkComponent' | 'linkTemplate' | 'locale'>

const dayNumberFormatters = new Map<string | undefined, Intl.NumberFormat>()

const formatDayNumber = (date: Date, locale?: string) => {
  let formatter = dayNumberFormatters.get(locale)

  if (!formatter) {
    formatter = new Intl.NumberFormat(locale)
    dayNumberFormatters.set(locale, formatter)
  }

  return formatter.format(date.getDate())
}

const formatAccessibleDate = (date: Date, locale?: string) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(date)

const DefaultDateLink = (anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...anchorProps} />

/**
 * A single day within the Calendar grid, rendered as a link.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-calendar--docs Calendar docs at Amsterdam Design System}
 */
export const CalendarDay = ({ date, isCurrent, linkComponent, linkTemplate, locale }: CalendarDayProps) => {
  const ariaCurrent = isCurrent ? 'date' : undefined
  const DateLink = linkComponent ?? DefaultDateLink
  const href = linkTemplate?.(date)

  const content = (
    <>
      <span aria-hidden={true}>{formatDayNumber(date, locale)}</span>
      <span className="ams-visually-hidden">{formatAccessibleDate(date, locale)}</span>
    </>
  )

  if (href === undefined) {
    return (
      <span aria-current={ariaCurrent} className={clsx('ams-calendar__day', isCurrent && 'ams-calendar__day--current')}>
        {content}
      </span>
    )
  }

  return (
    <DateLink
      aria-current={ariaCurrent}
      className={clsx('ams-calendar__day-link', isCurrent && 'ams-calendar__day-link--current')}
      href={href}
    >
      {content}
    </DateLink>
  )
}

CalendarDay.displayName = 'CalendarDay'
