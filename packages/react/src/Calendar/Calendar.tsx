/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId } from 'react'

import type { IconProps } from '../Icon'

import { useMonthNavigation } from '../common/useMonthNavigation'
import { CalendarBody } from './CalendarBody'
import { CalendarHeader } from './CalendarHeader'

export type CalendarProps = {
  /** The text for the internal, visually hidden heading that gives the component an accessible name. */
  readonly accessibleName?: string
  /**
   * Connects the component with an internal element that defines its accessible name.
   * Note: must be unique for the page.
   */
  readonly accessibleNameId?: string
  /** The month shown on first render. Defaults to the current month. */
  readonly defaultMonth?: Date
  /** The component to render each date link with. Defaults to a plain anchor. */
  readonly linkComponent?: ElementType
  /** Builds the link target for a date. Return `undefined` to render the date as plain text. */
  readonly linkTemplate?: (date: Date) => string | undefined
  /** BCP 47 language tag for the weekday names, month caption, and accessible date labels. Defaults to `'nl-NL'`. */
  readonly locale?: string
  /**
   * The icon for the button that navigates to the next month.
   * Not for use within Amsterdam.
   * @default ChevronForwardIcon
   */
  readonly nextMonthButtonIcon?: IconProps['svg']
  /**
   * The accessible label for the button that navigates to the next month.
   * @default Volgende maand
   */
  readonly nextMonthButtonLabel?: string
  /**
   * The icon for the button that navigates to the next year.
   * Not for use within Amsterdam.
   * @default ChevronDoubleForwardIcon
   */
  readonly nextYearButtonIcon?: IconProps['svg']
  /**
   * The accessible label for the button that navigates to the next year.
   * @default Volgend jaar
   */
  readonly nextYearButtonLabel?: string
  /**
   * The icon for the button that navigates to the previous month.
   * Not for use within Amsterdam.
   * @default ChevronBackwardIcon
   */
  readonly previousMonthButtonIcon?: IconProps['svg']
  /**
   * The accessible label for the button that navigates to the previous month.
   * @default Vorige maand
   */
  readonly previousMonthButtonLabel?: string
  /**
   * The icon for the button that navigates to the previous year.
   * Not for use within Amsterdam.
   * @default ChevronDoubleBackwardIcon
   */
  readonly previousYearButtonIcon?: IconProps['svg']
  /**
   * The accessible label for the button that navigates to the previous year.
   * @default Vorig jaar
   */
  readonly previousYearButtonLabel?: string
} & Readonly<HTMLAttributes<HTMLElement>>

/**
 * A visual way to navigate between dates using a calendar view.
 *
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
      nextMonthButtonIcon,
      nextMonthButtonLabel,
      nextYearButtonIcon,
      nextYearButtonLabel,
      previousMonthButtonIcon,
      previousMonthButtonLabel,
      previousYearButtonIcon,
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
          nextMonthButtonIcon={nextMonthButtonIcon}
          nextMonthButtonLabel={nextMonthButtonLabel}
          nextYearButtonIcon={nextYearButtonIcon}
          nextYearButtonLabel={nextYearButtonLabel}
          previousMonthButtonIcon={previousMonthButtonIcon}
          previousMonthButtonLabel={previousMonthButtonLabel}
          previousYearButtonIcon={previousYearButtonIcon}
          previousYearButtonLabel={previousYearButtonLabel}
        />
        <CalendarBody linkComponent={linkComponent} linkTemplate={linkTemplate} locale={locale} month={month} />
      </nav>
    )
  },
)

Calendar.displayName = 'Calendar'
