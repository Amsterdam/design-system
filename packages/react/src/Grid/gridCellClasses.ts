/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridColumnNumber, GridColumnNumbers } from './Grid'
import type { GridCellProps } from './GridCell'

export const addGridClass = (prefix: string, value?: GridColumnNumber | GridColumnNumbers | 'all'): string[] => {
  if (value === 'all' || typeof value === 'number') {
    return [`${prefix}${value}`]
  } else if (value) {
    const { narrow, medium, wide } = value
    return [`${prefix}${narrow}`, `${prefix}${medium}-medium`, `${prefix}${wide}-wide`]
  }
  return []
}

export const gridCellClasses = (colSpan?: GridCellProps['span'], colStart?: GridCellProps['start']): string[] => [
  ...addGridClass('ams-grid__cell--span-', colSpan),
  ...addGridClass('ams-grid__cell--start-', colStart),
]
