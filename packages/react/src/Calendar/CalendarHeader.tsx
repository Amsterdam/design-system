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
  readonly goToNextMonth: () => void
  readonly goToNextYear: () => void
  readonly goToPreviousMonth: () => void
  readonly goToPreviousYear: () => void
  readonly month: Date
} & Pick<
  CalendarProps,
  'locale' | 'nextMonthButtonLabel' | 'nextYearButtonLabel' | 'previousMonthButtonLabel' | 'previousYearButtonLabel'
>

export const CalendarHeader = ({
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
}: CalendarHeaderProps) => (
  <div className="ams-calendar__header">
    <IconButton label={previousYearButtonLabel} onClick={goToPreviousYear} svg={ChevronDoubleBackwardIcon} />
    <IconButton label={previousMonthButtonLabel} onClick={goToPreviousMonth} svg={ChevronBackwardIcon} />
    <span className="ams-calendar__caption">
      {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(month)}
    </span>
    <IconButton label={nextMonthButtonLabel} onClick={goToNextMonth} svg={ChevronForwardIcon} />
    <IconButton label={nextYearButtonLabel} onClick={goToNextYear} svg={ChevronDoubleForwardIcon} />
  </div>
)

CalendarHeader.displayName = 'CalendarHeader'
