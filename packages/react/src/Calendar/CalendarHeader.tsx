/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ChevronBackwardIcon,
  ChevronDoubleBackwardIcon,
  ChevronDoubleForwardIcon,
  ChevronForwardIcon,
} from '@amsterdam/design-system-react-icons'

import type { CalendarProps } from './Calendar'

import { IconButton } from '../IconButton'

export type CalendarHeaderProps = {
  /** Navigates to the next month. */
  readonly goToNextMonth: () => void
  /** Navigates to the next year. */
  readonly goToNextYear: () => void
  /** Navigates to the previous month. */
  readonly goToPreviousMonth: () => void
  /** Navigates to the previous year. */
  readonly goToPreviousYear: () => void
  /** The currently displayed month. */
  readonly month: Date
} & Pick<
  CalendarProps,
  | 'locale'
  | 'nextMonthButtonIcon'
  | 'nextMonthButtonLabel'
  | 'nextYearButtonIcon'
  | 'nextYearButtonLabel'
  | 'previousMonthButtonIcon'
  | 'previousMonthButtonLabel'
  | 'previousYearButtonIcon'
  | 'previousYearButtonLabel'
>

/**
 * The navigation controls of a Calendar, showing the current month and year.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-calendar--docs Calendar docs at Amsterdam Design System}
 */
export const CalendarHeader = ({
  goToNextMonth,
  goToNextYear,
  goToPreviousMonth,
  goToPreviousYear,
  locale,
  month,
  nextMonthButtonIcon = ChevronForwardIcon,
  nextMonthButtonLabel = 'Volgende maand',
  nextYearButtonIcon = ChevronDoubleForwardIcon,
  nextYearButtonLabel = 'Volgend jaar',
  previousMonthButtonIcon = ChevronBackwardIcon,
  previousMonthButtonLabel = 'Vorige maand',
  previousYearButtonIcon = ChevronDoubleBackwardIcon,
  previousYearButtonLabel = 'Vorig jaar',
}: CalendarHeaderProps) => (
  <div className="ams-calendar__header">
    <IconButton label={previousYearButtonLabel} onClick={goToPreviousYear} svg={previousYearButtonIcon} />
    <IconButton label={previousMonthButtonLabel} onClick={goToPreviousMonth} svg={previousMonthButtonIcon} />
    <span className="ams-calendar__caption">
      {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month)}
    </span>
    <IconButton label={nextMonthButtonLabel} onClick={goToNextMonth} svg={nextMonthButtonIcon} />
    <IconButton label={nextYearButtonLabel} onClick={goToNextYear} svg={nextYearButtonIcon} />
  </div>
)

CalendarHeader.displayName = 'CalendarHeader'
