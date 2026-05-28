/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes } from 'react'

import { clsx } from 'clsx'

import type { CalendarProps, DateRange } from './Calendar'

export type CalendarDatesProps = {
  /** The month to display. */
  readonly month: Date
} & CalendarProps

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

const isOutOfBounds = (date: Date, minDate?: Date, maxDate?: Date) =>
  (minDate !== undefined && startOfDay(date) < startOfDay(minDate)) ||
  (maxDate !== undefined && startOfDay(date) > startOfDay(maxDate))

const isWithinRange = (date: Date, { start, end }: DateRange) =>
  start !== null && end !== null && startOfDay(date) > startOfDay(start) && startOfDay(date) < startOfDay(end)

const nextRange = ({ start, end }: DateRange, date: Date): DateRange => {
  if (start === null || end !== null) {
    return { start: date, end: null }
  }

  if (startOfDay(date) < startOfDay(start)) {
    return { start: date, end: null }
  }

  return { start, end: date }
}

const DefaultDateLink = (anchorProps: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...anchorProps} />

export const CalendarDates = (props: CalendarDatesProps) => {
  const { locale, month } = props

  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const today = new Date()

  const firstWeekdayMonday = (new Date(year, monthIndex, 1).getDay() + 6) % 7
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate()

  const leadingDays = firstWeekdayMonday
  const trailingDays = (7 - ((leadingDays + daysInMonth) % 7)) % 7

  const dateKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

  const dates: Array<{ date: Date; inCurrentMonth: boolean; key: string }> = []

  for (let i = leadingDays - 1; i >= 0; i--) {
    const date = new Date(year, monthIndex - 1, daysInPrevMonth - i)
    dates.push({ date, inCurrentMonth: false, key: dateKey(date) })
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, monthIndex, i)
    dates.push({ date, inCurrentMonth: true, key: dateKey(date) })
  }

  for (let i = 1; i <= trailingDays; i++) {
    const date = new Date(year, monthIndex + 1, i)
    dates.push({ date, inCurrentMonth: false, key: dateKey(date) })
  }

  return (
    <div className="ams-calendar__days">
      {Array.from({ length: 7 }).map((_, i) => {
        const date = new Date(2026, 5, 1 + i) // 2026-06-01 is a Monday
        const weekday = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

        return (
          <span className="ams-calendar__weekday" key={`weekday-${i}`}>
            {weekday}
          </span>
        )
      })}
      {dates.map(({ date, inCurrentMonth, key }) => {
        const isCurrent = inCurrentMonth && isSameDay(date, today)

        if (props.mode === 'link') {
          const href = inCurrentMonth ? props.linkTemplate(date) : undefined

          if (!href) {
            return (
              <button
                aria-current={isCurrent ? 'date' : undefined}
                className={clsx('ams-calendar__day', isCurrent && 'ams-calendar__day--current')}
                disabled
                key={key}
                type="button"
              >
                {date.getDate()}
              </button>
            )
          }

          const DateLink = props.linkComponent ?? DefaultDateLink

          return (
            <DateLink
              aria-current={isCurrent ? 'date' : undefined}
              className={clsx('ams-calendar__day-link', isCurrent && 'ams-calendar__day-link--current')}
              href={href}
              key={key}
            >
              {date.getDate()}
            </DateLink>
          )
        }

        let isInRange = false
        let isSelected = false

        if (props.mode === 'range') {
          const { start, end } = props.value

          isSelected = (start !== null && isSameDay(date, start)) || (end !== null && isSameDay(date, end))
          isInRange = isWithinRange(date, props.value)
        } else {
          isSelected = props.value !== null && isSameDay(date, props.value)
        }

        const isDisabled =
          !inCurrentMonth ||
          (props.isDateDisabled?.(date) ?? false) ||
          isOutOfBounds(date, props.minDate, props.maxDate)

        const handleClick = () => {
          if (props.mode === 'range') {
            props.onChange(nextRange(props.value, date))
          } else {
            props.onChange(date)
          }
        }

        return (
          <button
            aria-current={isCurrent ? 'date' : undefined}
            aria-pressed={isSelected || undefined}
            className={clsx(
              'ams-calendar__day',
              isCurrent && 'ams-calendar__day--current',
              (isInRange || isSelected) && 'ams-calendar__day--selected',
            )}
            disabled={isDisabled}
            key={key}
            onClick={isDisabled ? undefined : handleClick}
            type="button"
          >
            {date.getDate()}
          </button>
        )
      })}
    </div>
  )
}
