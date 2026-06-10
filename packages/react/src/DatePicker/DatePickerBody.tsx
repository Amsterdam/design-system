/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { KeyboardEvent, RefObject } from 'react'

import type { DatePickerProps } from './DatePicker'

import { getDaysInMonth, getFirstWeekday, isSameDay } from '../common/dates'
import { DatePickerDay } from './DatePickerDay'

export type DatePickerBodyProps = {
  /** The `id` of the month caption that gives the grid its accessible name. */
  readonly captionId: string
  /** The date that currently holds the roving tab stop. */
  readonly focusedDate: Date
  /** Captures the focused day’s button so focus can follow keyboard navigation. */
  readonly focusedDayRef: RefObject<HTMLButtonElement>
  /** Whether a date cannot be selected. */
  readonly isDayDisabled: (date: Date) => boolean
  /** Whether a date is part of the current selection. */
  readonly isDaySelected: (date: Date) => boolean
  /** The month to display. */
  readonly month: Date
  /** Handles keyboard navigation within the grid. */
  readonly onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void
  /** Selects a date. */
  readonly onSelectDate: (date: Date) => void
} & Pick<DatePickerProps, 'locale'>

export const DatePickerBody = ({
  captionId,
  focusedDate,
  focusedDayRef,
  isDayDisabled,
  isDaySelected,
  locale,
  month,
  onKeyDown,
  onSelectDate,
}: DatePickerBodyProps) => {
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const today = new Date()

  const firstWeekday = getFirstWeekday(year, monthIndex)
  const daysInMonth = getDaysInMonth(year, monthIndex)
  const weekdayFormatter = new Intl.DateTimeFormat(locale, { weekday: 'short' })

  const cells: (Date | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, monthIndex, index + 1)),
  ]
  while (cells.length % 7 !== 0) {
    cells.push(null)
  }
  const weeks = Array.from({ length: cells.length / 7 }, (_, index) => cells.slice(index * 7, index * 7 + 7))

  return (
    <div aria-labelledby={captionId} className="ams-date-picker__body" onKeyDown={onKeyDown} role="grid">
      <div className="ams-date-picker__row" role="row">
        {Array.from({ length: 7 }).map((_, index) => (
          <span className="ams-date-picker__weekday" key={`weekday-${index}`} role="columnheader">
            {weekdayFormatter.format(new Date(2026, 5, 1 + index))}
          </span>
        ))}
      </div>
      {weeks.map((week, weekIndex) => (
        <div className="ams-date-picker__row" key={`week-${weekIndex}`} role="row">
          {week.map((date, dayIndex) =>
            date === null ? (
              <div className="ams-date-picker__cell" key={`empty-${weekIndex}-${dayIndex}`} role="gridcell" />
            ) : (
              <DatePickerDay
                date={date}
                focusedDayRef={isSameDay(date, focusedDate) ? focusedDayRef : undefined}
                isCurrent={isSameDay(date, today)}
                isDisabled={isDayDisabled(date)}
                isFocused={isSameDay(date, focusedDate)}
                isSelected={isDaySelected(date)}
                key={`${year}-${monthIndex}-${date.getDate()}`}
                locale={locale}
                onSelect={onSelectDate}
              />
            ),
          )}
        </div>
      ))}
    </div>
  )
}

DatePickerBody.displayName = 'DatePickerBody'
