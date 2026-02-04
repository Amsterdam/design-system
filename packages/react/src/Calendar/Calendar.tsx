/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { ChevronBackwardIcon, ChevronForwardIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useEffect, useState } from 'react'

import { IconButton } from '../IconButton'

// CALENDAR

export type CalendarProps = {
  locale?: string
  month?: Date
  nextMonthButtonLabel?: string
  nextYearButtonLabel?: string
  previousMonthButtonLabel?: string
  previousYearButtonLabel?: string
} & HTMLAttributes<HTMLDivElement>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-calendar--docs Calendar docs at Amsterdam Design System}
 */
export const Calendar = forwardRef(
  (
    {
      className,
      locale = 'nl-NL',
      month: initialMonth = new Date(),
      nextMonthButtonLabel,
      nextYearButtonLabel,
      previousMonthButtonLabel,
      previousYearButtonLabel,
      ...restProps
    }: CalendarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    // State for current month
    const [month, setMonth] = useState<Date>(initialMonth)
    // State for selected day (stores year, month, day)
    const [selectedDay, setSelectedDay] = useState<{
      day: number
      month: number
      year: number
    } | null>(null)

    // Reset selectedDay if it is not in the current month after navigation
    useEffect(() => {
      if (selectedDay && (selectedDay.year !== month.getFullYear() || selectedDay.month !== month.getMonth())) {
        setSelectedDay(null)
      }
    }, [month, selectedDay])

    // Navigation functions
    const goToPreviousYear = () => setMonth((prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1))
    const goToPreviousMonth = () => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
    const goToNextMonth = () => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
    const goToNextYear = () => setMonth((prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1))

    return (
      <div {...restProps} className={clsx('ams-calendar', className)} ref={ref}>
        <CalendarMonth
          goToNextMonth={goToNextMonth}
          goToNextYear={goToNextYear}
          goToPreviousMonth={goToPreviousMonth}
          goToPreviousYear={goToPreviousYear}
          locale={locale}
          month={month}
          nextMonthButtonLabel={nextMonthButtonLabel}
          nextYearButtonLabel={nextYearButtonLabel}
          previousMonthButtonLabel={previousMonthButtonLabel}
          previousYearButtonLabel={previousYearButtonLabel}
        />
        <CalendarDates locale={locale} month={month} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      </div>
    )
  },
)

Calendar.displayName = 'Calendar'

// CALENDAR MONTH

export type CalendarMonthProps = {
  goToNextMonth: () => void
  goToNextYear: () => void
  goToPreviousMonth: () => void
  goToPreviousYear: () => void
} & Pick<
  CalendarProps,
  | 'locale'
  | 'month'
  | 'nextMonthButtonLabel'
  | 'nextYearButtonLabel'
  | 'previousMonthButtonLabel'
  | 'previousYearButtonLabel'
>

export const CalendarMonth = ({
  goToNextMonth,
  goToNextYear,
  goToPreviousMonth,
  goToPreviousYear,
  locale,
  month = new Date(),
  nextMonthButtonLabel = 'Volgende maand',
  nextYearButtonLabel = 'Volgend jaar',
  previousMonthButtonLabel = 'Vorige maand',
  previousYearButtonLabel = 'Vorig jaar',
}: CalendarMonthProps) => (
  <div className="ams-calendar-month">
    <IconButton label={previousYearButtonLabel} onClick={goToPreviousYear} svg={ChevronBackwardIcon} />
    <IconButton label={previousMonthButtonLabel} onClick={goToPreviousMonth} svg={ChevronBackwardIcon} />
    <span className="ams-calendar-month__label">
      {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month)}
    </span>
    <IconButton label={nextMonthButtonLabel} onClick={goToNextMonth} svg={ChevronForwardIcon} />
    <IconButton label={nextYearButtonLabel} onClick={goToNextYear} svg={ChevronForwardIcon} />
  </div>
)

CalendarMonth.displayName = 'CalendarMonth'

// DATES

export type CalendarDatesProps = {
  selectedDay: { day: number; month: number; year: number } | null
  setSelectedDay: (day: { day: number; month: number; year: number }) => void
} & Pick<CalendarProps, 'locale' | 'month'>

const CalendarDates = ({ locale, month = new Date(), selectedDay, setSelectedDay }: CalendarDatesProps) => {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()

  // First day of the month
  const firstDay = new Date(year, monthIndex, 1)
  const firstWeekday = firstDay.getDay() // 0 (Sunday) - 6 (Saturday)
  // Adjust so that Monday is 0, Sunday is 6
  const firstWeekdayMonday = (firstWeekday + 6) % 7

  // Number of days in current month
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  // Number of days in previous month
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate()

  // Calculate leading and trailing days
  const leadingDays = firstWeekdayMonday
  const totalDays = leadingDays + daysInMonth
  const trailingDays = (7 - (totalDays % 7)) % 7

  // Prepare array of date objects for rendering
  const dates: Array<{ currentMonth: boolean; day: number; key: string }> = []

  // Previous month days (disabled)
  for (let i = leadingDays - 1; i >= 0; i--) {
    dates.push({
      currentMonth: false,
      day: daysInPrevMonth - i,
      key: `${monthIndex - 1}-${daysInPrevMonth - i}`,
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({
      currentMonth: true,
      day: i,
      key: `${monthIndex}-${i}`,
    })
  }

  // Next month days (disabled)
  for (let i = 1; i <= trailingDays; i++) {
    dates.push({
      currentMonth: false,
      day: i,
      key: `${monthIndex + 1}-${i}`,
    })
  }

  return (
    <div className="ams-calendar__days">
      {Array.from({ length: 7 }).map((_, i) => {
        const date = new Date(2025, 11, 1 + i) // 2025-12-01 is a Monday
        const weekday = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

        return (
          <span className="ams-calendar__weekday" key={`weekday-${i}`}>
            {weekday}
          </span>
        )
      })}
      {dates.map(({ currentMonth, day, key }) => {
        const isSelected =
          currentMonth &&
          selectedDay &&
          selectedDay.year === year &&
          selectedDay.month === monthIndex &&
          selectedDay.day === day
        // Calculate current date dynamically
        const today = new Date()
        const isToday =
          currentMonth && year === today.getFullYear() && monthIndex === today.getMonth() && day === today.getDate()
        return (
          <button
            className={clsx(
              'ams-calendar__day',
              isSelected && 'ams-calendar__day--selected',
              isToday && 'ams-calendar__day--current',
            )}
            disabled={!currentMonth}
            key={key}
            onClick={currentMonth ? () => setSelectedDay({ day, month: monthIndex, year }) : undefined}
            type="button"
            {...(isToday ? { 'aria-current': 'date' } : {})}
          >
            {day}
          </button>
        )
      })}
    </div>
  )
}
