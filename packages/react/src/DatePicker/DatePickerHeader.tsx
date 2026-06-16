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

import type { DatePickerProps } from './DatePicker'

import { IconButton } from '../IconButton'

export type DatePickerHeaderProps = {
  /** The `id` connecting the month caption to the grid’s accessible name. */
  readonly captionId: string
  /** Disables the button that navigates to the next month. */
  readonly disableNextMonth?: boolean
  /** Disables the button that navigates to the next year. */
  readonly disableNextYear?: boolean
  /** Disables the button that navigates to the previous month. */
  readonly disablePreviousMonth?: boolean
  /** Disables the button that navigates to the previous year. */
  readonly disablePreviousYear?: boolean
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
  DatePickerProps,
  'locale' | 'nextMonthButtonLabel' | 'nextYearButtonLabel' | 'previousMonthButtonLabel' | 'previousYearButtonLabel'
>

export const DatePickerHeader = ({
  captionId,
  disableNextMonth,
  disableNextYear,
  disablePreviousMonth,
  disablePreviousYear,
  goToNextMonth,
  goToNextYear,
  goToPreviousMonth,
  goToPreviousYear,
  locale,
  month,
  nextMonthButtonLabel = 'Volgende maand',
  nextYearButtonLabel = 'Volgend jaar',
  previousMonthButtonLabel = 'Vorige maand',
  previousYearButtonLabel = 'Vorig jaar',
}: DatePickerHeaderProps) => (
  <div className="ams-date-picker__header">
    <IconButton
      disabled={disablePreviousYear}
      label={previousYearButtonLabel}
      onClick={goToPreviousYear}
      svg={ChevronDoubleBackwardIcon}
    />
    <IconButton
      disabled={disablePreviousMonth}
      label={previousMonthButtonLabel}
      onClick={goToPreviousMonth}
      svg={ChevronBackwardIcon}
    />
    <span className="ams-date-picker__caption" id={captionId}>
      {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month)}
    </span>
    <IconButton
      disabled={disableNextMonth}
      label={nextMonthButtonLabel}
      onClick={goToNextMonth}
      svg={ChevronForwardIcon}
    />
    <IconButton
      disabled={disableNextYear}
      label={nextYearButtonLabel}
      onClick={goToNextYear}
      svg={ChevronDoubleForwardIcon}
    />
  </div>
)

DatePickerHeader.displayName = 'DatePickerHeader'
