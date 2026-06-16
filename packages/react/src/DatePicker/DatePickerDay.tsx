/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { RefObject } from 'react'

import { clsx } from 'clsx'

import type { DatePickerProps } from './DatePicker'

export type DatePickerDayProps = {
  /** Text appended to the accessible name, e.g. to mark the start or end of a range. */
  readonly boundaryLabel?: string
  /** The date to display. */
  readonly date: Date
  /** Captures this button when it holds the roving tab stop, so focus can follow keyboard navigation. */
  readonly focusedDayRef?: RefObject<HTMLButtonElement>
  /** Whether this date is today. */
  readonly isCurrent: boolean
  /** Whether this date cannot be selected. */
  readonly isDisabled: boolean
  /** Whether this date holds the roving tab stop. */
  readonly isFocused: boolean
  /** Whether this date is part of the current selection. */
  readonly isSelected: boolean
  /** Selects this date. */
  readonly onSelect: (date: Date) => void
} & Pick<DatePickerProps, 'locale'>

const formatAccessibleDate = (date: Date, locale?: string, boundaryLabel?: string) => {
  const fullDate = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  }).format(date)

  return boundaryLabel ? `${fullDate}, ${boundaryLabel}` : fullDate
}

export const DatePickerDay = ({
  boundaryLabel,
  date,
  focusedDayRef,
  isCurrent,
  isDisabled,
  isFocused,
  isSelected,
  locale,
  onSelect,
}: DatePickerDayProps) => (
  <div aria-selected={isSelected} className="ams-date-picker__cell" role="gridcell">
    <button
      aria-current={isCurrent ? 'date' : undefined}
      aria-disabled={isDisabled || undefined}
      className={clsx('ams-date-picker__day', isCurrent && 'ams-date-picker__day--current')}
      onClick={() => onSelect(date)}
      ref={focusedDayRef}
      tabIndex={isFocused ? 0 : -1}
      type="button"
    >
      <span aria-hidden={true}>{date.getDate()}</span>
      <span className="ams-visually-hidden">{formatAccessibleDate(date, locale, boundaryLabel)}</span>
    </button>
  </div>
)

DatePickerDay.displayName = 'DatePickerDay'
