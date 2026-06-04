/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import { useMonthNavigation } from '../common/useMonthNavigation'
import { CalendarBody } from './CalendarBody'
import { CalendarHeader } from './CalendarHeader'

export type CalendarProps = {
  /** A visually hidden heading that gives the Calendar an accessible name. */
  readonly accessibleName?: string
  /**
   * Connects the Calendar with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  readonly accessibleNameId?: string
  /** The month shown when the Calendar first renders. Defaults to the current month. */
  readonly defaultMonth?: Date
  /** The component to render each date link with. Defaults to a plain anchor. */
  readonly linkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** Builds the link target for a date. Return `undefined` to render the date as plain text. */
  readonly linkTemplate?: (date: Date) => string | undefined
  /** The locale used to format the weekday and month names. */
  readonly locale?: string
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
} & Readonly<HTMLAttributes<HTMLElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-calendar--docs Calendar docs at Amsterdam Design System}
 */
export const Calendar = forwardRef(
  (
    {
      accessibleName,
      accessibleNameId,
      className,
      defaultMonth = new Date(),
      linkComponent,
      linkTemplate,
      locale = 'nl-NL',
      nextMonthButtonLabel,
      nextYearButtonLabel,
      previousMonthButtonLabel,
      previousYearButtonLabel,
      ...restProps
    }: CalendarProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const generatedId = useId()
    const labelId = accessibleNameId || generatedId

    const { goToNextMonth, goToNextYear, goToPreviousMonth, goToPreviousYear, month } = useMonthNavigation(defaultMonth)

    return (
      <nav {...restProps} aria-labelledby={labelId} className={clsx('ams-calendar', className)} ref={ref}>
        <h2 aria-hidden={true} className="ams-visually-hidden" id={labelId}>
          {accessibleName || 'Kalender'}
        </h2>
        <CalendarHeader
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
        <CalendarBody linkComponent={linkComponent} linkTemplate={linkTemplate} locale={locale} month={month} />
      </nav>
    )
  },
)

Calendar.displayName = 'Calendar'
