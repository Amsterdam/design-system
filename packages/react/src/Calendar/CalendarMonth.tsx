/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ChevronBackwardDoubleIcon,
  ChevronBackwardIcon,
  ChevronForwardDoubleIcon,
  ChevronForwardIcon,
} from '@amsterdam/design-system-react-icons'

import type { CalendarProps } from './Calendar'

import { IconButton } from '../IconButton'

export type CalendarMonthProps = {
  disableNextMonth?: boolean
  disableNextYear?: boolean
  disablePreviousMonth?: boolean
  disablePreviousYear?: boolean
  goToNextMonth: () => void
  goToNextYear: () => void
  goToPreviousMonth: () => void
  goToPreviousYear: () => void
  month: Date
} & Pick<
  CalendarProps,
  'locale' | 'nextMonthButtonLabel' | 'nextYearButtonLabel' | 'previousMonthButtonLabel' | 'previousYearButtonLabel'
>

export const CalendarMonth = ({
  disableNextMonth,
  disableNextYear,
  disablePreviousMonth,
  disablePreviousYear,
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
    <IconButton
      disabled={disablePreviousYear}
      label={previousYearButtonLabel}
      onClick={goToPreviousYear}
      svg={ChevronBackwardDoubleIcon}
    />
    <IconButton
      disabled={disablePreviousMonth}
      label={previousMonthButtonLabel}
      onClick={goToPreviousMonth}
      svg={ChevronBackwardIcon}
    />
    <span className="ams-calendar-month__label">
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
      svg={ChevronForwardDoubleIcon}
    />
  </div>
)

CalendarMonth.displayName = 'CalendarMonth'
