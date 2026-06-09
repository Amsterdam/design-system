/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CalendarProps } from './Calendar'

import { getDaysInMonth, getFirstWeekday, isSameDay } from '../common/dates'
import { CalendarDay } from './CalendarDay'

export type CalendarBodyProps = {
  /** The month to display. */
  readonly month: Date
} & Pick<CalendarProps, 'linkComponent' | 'linkTemplate' | 'locale'>

export const CalendarBody = ({ linkComponent, linkTemplate, locale, month }: CalendarBodyProps) => {
  const today = new Date()
  const monthIndex = month.getMonth()
  const year = month.getFullYear()

  const daysInMonth = getDaysInMonth(year, monthIndex)
  const firstWeekday = getFirstWeekday(year, monthIndex)
  const weekdayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })

  return (
    <div className="ams-calendar__body">
      {Array.from({ length: 7 }).map((_, index) => {
        const date = new Date(2026, 5, 1 + index) // 2026-06-01 is a Monday
        const weekday = weekdayFormatter.format(date)

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
        const date = new Date(year, monthIndex, index + 1)

        return (
          <CalendarDay
            date={date}
            isCurrent={isSameDay(date, today)}
            key={index}
            linkComponent={linkComponent}
            linkTemplate={linkTemplate}
            locale={locale}
          />
        )
      })}
    </div>
  )
}

CalendarBody.displayName = 'CalendarBody'
