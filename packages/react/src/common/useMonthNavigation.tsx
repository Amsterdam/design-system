/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { useState } from 'react'

/**
 * Manages the month displayed by a calendar-style component.
 * The month is always normalised to the first day of the month.
 *
 * @param defaultMonth The month shown initially.
 */
export const useMonthNavigation = (defaultMonth: Date) => {
  const [month, setMonth] = useState<Date>(defaultMonth)

  const goToPreviousYear = () => setMonth((current) => new Date(current.getFullYear() - 1, current.getMonth(), 1))
  const goToPreviousMonth = () => setMonth((current) => new Date(current.getFullYear(), current.getMonth() - 1, 1))
  const goToNextMonth = () => setMonth((current) => new Date(current.getFullYear(), current.getMonth() + 1, 1))
  const goToNextYear = () => setMonth((current) => new Date(current.getFullYear() + 1, current.getMonth(), 1))

  return { goToNextMonth, goToNextYear, goToPreviousMonth, goToPreviousYear, month, setMonth }
}
