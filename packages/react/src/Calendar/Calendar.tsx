/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useState } from 'react'

import { CalendarDates } from './CalendarDates'
import { CalendarMonth } from './CalendarMonth'

/** A start and end date. Either may be `null` while the range is incomplete. */
export type DateRange = {
  start: Date | null
  end: Date | null
}

type CalendarBaseProps = {
  /** An extra class name. */
  className?: string
  /** The month displayed when the Calendar first renders. Defaults to the current month. */
  defaultMonth?: Date
  /** The locale used to format the weekday and month names. */
  locale?: string
  /** The accessible label for the button that navigates to the next month. */
  nextMonthButtonLabel?: string
  /** The accessible label for the button that navigates to the next year. */
  nextYearButtonLabel?: string
  /** The accessible label for the button that navigates to the previous month. */
  previousMonthButtonLabel?: string
  /** The accessible label for the button that navigates to the previous year. */
  previousYearButtonLabel?: string
}

type CalendarLinkProps = {
  /** The React component to use for the date links. Defaults to a plain anchor. */
  linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** Builds the link target for a date. Return `undefined` to render the date as plain text. */
  linkTemplate: (date: Date) => string | undefined
  /** Renders each date as a link, e.g. for an events calendar. */
  mode: 'link'
}

type CalendarPickerBaseProps = {
  /** Prevents selection of individual dates, e.g. dates that are unavailable. */
  isDateDisabled?: (date: Date) => boolean
  /** The latest selectable date. Also bounds month navigation. */
  maxDate?: Date
  /** The earliest selectable date. Also bounds month navigation. */
  minDate?: Date
}

type CalendarSingleProps = {
  /** Selects a single date. This is the default mode. */
  mode?: 'single'
  /** Called when the user selects a date. */
  onChange: (value: Date | null) => void
  /** The currently selected date. */
  value: Date | null
} & CalendarPickerBaseProps

type CalendarRangeProps = {
  /** Selects a start and end date. */
  mode: 'range'
  /** Called when the user updates the range. */
  onChange: (value: DateRange) => void
  /** The currently selected range. */
  value: DateRange
} & CalendarPickerBaseProps

export type CalendarProps = CalendarBaseProps & (CalendarLinkProps | CalendarRangeProps | CalendarSingleProps)

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate())

const CalendarRoot = forwardRef((props: CalendarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    defaultMonth = new Date(),
    locale = 'nl-NL',
    nextMonthButtonLabel,
    nextYearButtonLabel,
    previousMonthButtonLabel,
    previousYearButtonLabel,
    ...modeProps
  } = props

  const [month, setMonth] = useState<Date>(defaultMonth)

  const goToPreviousYear = () => setMonth((prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1))
  const goToPreviousMonth = () => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  const goToNextMonth = () => setMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  const goToNextYear = () => setMonth((prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1))

  const minDate = props.mode === 'link' ? undefined : props.minDate
  const maxDate = props.mode === 'link' ? undefined : props.maxDate
  const year = month.getFullYear()
  const monthIndex = month.getMonth()

  const disablePreviousYear = minDate !== undefined && new Date(year - 1, monthIndex + 1, 0) < startOfDay(minDate)
  const disablePreviousMonth = minDate !== undefined && new Date(year, monthIndex, 0) < startOfDay(minDate)
  const disableNextMonth = maxDate !== undefined && new Date(year, monthIndex + 1, 1) > startOfDay(maxDate)
  const disableNextYear = maxDate !== undefined && new Date(year + 1, monthIndex, 1) > startOfDay(maxDate)

  return (
    <div className={clsx('ams-calendar', className)} ref={ref}>
      <CalendarMonth
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
      <CalendarDates {...modeProps} locale={locale} month={month} />
    </div>
  )
})

CalendarRoot.displayName = 'Calendar'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-calendar--docs Calendar docs at Amsterdam Design System}
 */
export const Calendar = Object.assign(CalendarRoot, {
  Dates: CalendarDates,
  Month: CalendarMonth,
})
