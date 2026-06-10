/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, KeyboardEvent } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'

import { getDaysInMonth, isSameDay, isSameMonth, startOfDay } from '../common/dates'
import { useMonthNavigation } from '../common/useMonthNavigation'
import { DatePickerBody } from './DatePickerBody'
import { DatePickerHeader } from './DatePickerHeader'
import { getNextFocusDate, isOutOfBounds, isWithinRange, nextRange } from './utils'

/** A start and end date. Either side may be `null` while the range is being chosen. */
export type DateRange = {
  /** The start of the range, or `null` when nothing is selected. */
  readonly start: Date | null
  /** The end of the range, or `null` while it is being chosen. */
  readonly end: Date | null
}

type DatePickerBaseProps = {
  /** The month shown when the Date Picker first renders. Defaults to the current month. */
  readonly defaultMonth?: Date
  /** Prevents selection of individual dates, e.g. dates that are unavailable. They remain reachable by keyboard. */
  readonly isDateDisabled?: (date: Date) => boolean
  /** The locale used to format the weekday names, the month caption, and the accessible date labels. */
  readonly locale?: string
  /** The latest selectable date. Also bounds month navigation. */
  readonly maxDate?: Date
  /** The earliest selectable date. Also bounds month navigation. */
  readonly minDate?: Date
  /**
   * The accessible label for the button that navigates to the next month.
   * @default Volgende maand
   */
  readonly nextMonthButtonLabel?: string
  /**
   * The accessible label for the button that navigates to the next year.
   * @default Volgend jaar
   */
  readonly nextYearButtonLabel?: string
  /**
   * The accessible label for the button that navigates to the previous month.
   * @default Vorige maand
   */
  readonly previousMonthButtonLabel?: string
  /**
   * The accessible label for the button that navigates to the previous year.
   * @default Vorig jaar
   */
  readonly previousYearButtonLabel?: string
} & Readonly<Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>>

type DatePickerSingleProps = {
  /** Selects a single date. This is the default mode. */
  readonly mode?: 'single'
  /** Called when the user selects or clears the date. */
  readonly onChange: (value: Date | null) => void
  /** The currently selected date, or `null`. */
  readonly value: Date | null
}

type DatePickerRangeProps = {
  /** Selects a start and end date. */
  readonly mode: 'range'
  /** Called when the user updates the range. */
  readonly onChange: (value: DateRange) => void
  /** The currently selected range. */
  readonly value: DateRange
}

export type DatePickerProps = DatePickerBaseProps & (DatePickerRangeProps | DatePickerSingleProps)

type DatePickerSelection = DatePickerRangeProps | DatePickerSingleProps

const getInitialFocusedDate = (month: Date, selectedDate: Date | null): Date => {
  if (selectedDate !== null && isSameMonth(selectedDate, month)) {
    return selectedDate
  }

  const today = new Date()
  if (isSameMonth(today, month)) {
    return today
  }

  return new Date(month.getFullYear(), month.getMonth(), 1)
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-date-picker--docs Date Picker docs at Amsterdam Design System}
 */
export const DatePicker = forwardRef((props: DatePickerProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    defaultMonth = new Date(),
    isDateDisabled,
    locale = 'nl-NL',
    maxDate,
    minDate,
    mode,
    nextMonthButtonLabel,
    nextYearButtonLabel,
    onChange,
    previousMonthButtonLabel,
    previousYearButtonLabel,
    value,
    ...restProps
  } = props

  // Destructuring decouples the discriminated union; re-narrow it into a correlated selection.
  const selection = { mode, onChange, value } as DatePickerSelection

  const captionId = useId()
  const { goToNextMonth, goToNextYear, goToPreviousMonth, goToPreviousYear, month, setMonth } =
    useMonthNavigation(defaultMonth)

  const selectedDate = selection.mode === 'range' ? selection.value.start : selection.value
  const [focusedDate, setFocusedDate] = useState<Date>(() => getInitialFocusedDate(month, selectedDate))

  const focusedDayRef = useRef<HTMLButtonElement>(null)
  const shouldFocusRef = useRef(false)

  useEffect(() => {
    if (shouldFocusRef.current) {
      focusedDayRef.current?.focus()
      shouldFocusRef.current = false
    }
  }, [focusedDate])

  useEffect(() => {
    setFocusedDate((current) => {
      if (isSameMonth(current, month)) {
        return current
      }

      const day = Math.min(current.getDate(), getDaysInMonth(month.getFullYear(), month.getMonth()))
      return new Date(month.getFullYear(), month.getMonth(), day)
    })
  }, [month])

  const isDayDisabled = (date: Date) => isOutOfBounds(date, minDate, maxDate) || (isDateDisabled?.(date) ?? false)

  const isDaySelected = (date: Date) => {
    if (selection.mode === 'range') {
      const { start, end } = selection.value

      return (
        (start !== null && isSameDay(date, start)) ||
        (end !== null && isSameDay(date, end)) ||
        isWithinRange(date, selection.value)
      )
    }

    return selection.value !== null && isSameDay(date, selection.value)
  }

  const selectDate = (date: Date) => {
    if (isDayDisabled(date)) {
      return
    }

    if (selection.mode === 'range') {
      selection.onChange(nextRange(selection.value, date))
    } else {
      selection.onChange(date)
    }
  }

  const moveFocusTo = (date: Date) => {
    shouldFocusRef.current = true
    setFocusedDate(date)

    if (!isSameMonth(date, month)) {
      setMonth(new Date(date.getFullYear(), date.getMonth(), 1))
    }
  }

  const onDayClick = (date: Date) => {
    moveFocusTo(date)
    selectDate(date)
  }

  const onGridKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      selectDate(focusedDate)
      return
    }

    const nextFocusDate = getNextFocusDate(event.key, event.shiftKey, focusedDate)
    if (nextFocusDate === undefined || isOutOfBounds(nextFocusDate, minDate, maxDate)) {
      return
    }

    event.preventDefault()
    moveFocusTo(nextFocusDate)
  }

  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const disablePreviousYear = minDate !== undefined && new Date(year - 1, monthIndex + 1, 0) < startOfDay(minDate)
  const disablePreviousMonth = minDate !== undefined && new Date(year, monthIndex, 0) < startOfDay(minDate)
  const disableNextMonth = maxDate !== undefined && new Date(year, monthIndex + 1, 1) > startOfDay(maxDate)
  const disableNextYear = maxDate !== undefined && new Date(year + 1, monthIndex, 1) > startOfDay(maxDate)

  return (
    <div {...restProps} className={clsx('ams-date-picker', className)} ref={ref}>
      <DatePickerHeader
        captionId={captionId}
        disableNextMonth={disableNextMonth}
        disableNextYear={disableNextYear}
        disablePreviousMonth={disablePreviousMonth}
        disablePreviousYear={disablePreviousYear}
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
      <DatePickerBody
        captionId={captionId}
        focusedDate={focusedDate}
        focusedDayRef={focusedDayRef}
        isDayDisabled={isDayDisabled}
        isDaySelected={isDaySelected}
        locale={locale}
        month={month}
        onKeyDown={onGridKeyDown}
        onSelectDate={onDayClick}
      />
    </div>
  )
})

DatePicker.displayName = 'DatePicker'
