/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridColumnNumbers, GridMediumColumnNumber, GridNarrowColumnNumber, GridWideColumnNumber } from './Grid'
import type { GridCellProps } from './GridCell'

export const addGridClass = (
  prefix: string,
  value?: GridNarrowColumnNumber | GridMediumColumnNumber | GridWideColumnNumber | GridColumnNumbers | 'all',
): string[] => {
  if (value === 'all' || typeof value === 'number') {
    return [`${prefix}${value}`]
  } else if (value) {
    const { narrow, medium, wide } = value
    return [`${prefix}${narrow}`, `${prefix}${medium}-medium`, `${prefix}${wide}-wide`]
  }
  return []
}

const getErrorMessage = (colSpanPlusStart: number, max: number): string => {
  return `The sum of the span and start values (${colSpanPlusStart}) must not exceed number of grid column lines (${max}).`
}

export const gridCellClasses = (colSpan?: GridCellProps['span'], colStart?: GridCellProps['start']): string[] => {
  if (typeof colSpan !== 'string' && colStart) {
    /* eslint-disable no-param-reassign */
    if (typeof colSpan === 'number' && typeof colStart === 'number') {
      if (window?.matchMedia(`(max-width: 576px)`) && colSpan + colStart > 5) {
        console.error(getErrorMessage(colSpan + colStart, 5))
        colSpan = 5 - colStart
      } else if (window?.matchMedia(`(max-width: 1088px)`) && colSpan + colStart > 9) {
        console.error(getErrorMessage(colSpan + colStart, 9))
        colSpan = 9 - colStart
      } else if (colSpan + colStart > 13) {
        console.error(getErrorMessage(colSpan + colStart, 13))
        colSpan = 13 - colStart
      }
    } else if (typeof colSpan === 'object' && typeof colStart === 'object') {
      if (colSpan.narrow + colStart.narrow > 5) {
        console.error(getErrorMessage(colSpan.narrow + colStart.narrow, 5))
        colSpan.narrow = (5 - colStart.narrow) as GridNarrowColumnNumber
      } else if (colSpan.medium + colStart.medium > 9) {
        console.error(getErrorMessage(colSpan.medium + colStart.medium, 9))
        colSpan.medium = (9 - colStart.medium) as GridMediumColumnNumber
      } else if (colSpan.wide + colStart.wide > 13) {
        console.error(getErrorMessage(colSpan.wide + colStart.wide, 13))
        colSpan.wide = (13 - colStart.wide) as GridWideColumnNumber
      }
    } else if (typeof colSpan === 'number' && typeof colStart === 'object') {
      if (window?.matchMedia(`(max-width: 576px)`) && colSpan + colStart.narrow > 5) {
        console.error(getErrorMessage(colSpan + colStart.narrow, 5))
        colSpan = 5 - colStart.narrow
      } else if (window?.matchMedia(`(max-width: 1088px)`) && colSpan + colStart.medium > 9) {
        console.error(getErrorMessage(colSpan + colStart.medium, 9))
        colSpan = 9 - colStart.medium
      } else if (colSpan + colStart.wide > 13) {
        console.error(getErrorMessage(colSpan + colStart.wide, 13))
        colSpan = 13 - colStart.wide
      }
    } else if (typeof colSpan === 'object' && typeof colStart === 'number') {
      if (colSpan.narrow + colStart > 5) {
        console.error(getErrorMessage(colSpan.narrow + colStart, 5))
        colSpan.narrow = (5 - colStart) as GridNarrowColumnNumber
      } else if (colSpan.medium + colStart > 9) {
        console.error(getErrorMessage(colSpan.medium + colStart, 9))
        colSpan.medium = (9 - colStart) as GridMediumColumnNumber
      } else if (colSpan.wide + colStart > 13) {
        console.error(getErrorMessage(colSpan.wide + colStart, 13))
        colSpan.wide = (13 - colStart) as GridWideColumnNumber
      }
    }
    /* eslint-enable no-param-reassign */
  }

  return [...addGridClass('ams-grid__cell--span-', colSpan), ...addGridClass('ams-grid__cell--start-', colStart)]
}
