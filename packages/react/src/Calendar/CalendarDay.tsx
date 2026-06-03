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

const formatAccessibleDate = (date: Date, locale?: string) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(date)

const DefaultDateLink = (anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...anchorProps} />

export const CalendarDay = ({ date, isCurrent, linkComponent, linkTemplate, locale }: CalendarDayProps) => {
  const DateLink = linkComponent ?? DefaultDateLink
  const href = linkTemplate?.(date)
  const ariaCurrent = isCurrent ? 'date' : undefined

  const content = (
    <>
      <span aria-hidden={true}>{date.getDate()}</span>
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
