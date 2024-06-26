/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridCellProps } from './GridCell'

export const gridCellClasses = (
  colspan?: GridCellProps['colspan'],
  start?: GridCellProps['start'],
  rowspan?: GridCellProps['rowspan'],
  row?: GridCellProps['row'],
): string[] => {
  if (!colspan && !start && !row && !rowspan) {
    return []
  }

  const classes = [] as string[]

  if (colspan === 'all' || typeof colspan === 'number') {
    classes.push(`ams-grid__cell--colspan-${colspan}`)
  } else if (colspan) {
    const { narrow, medium, wide } = colspan
    classes.push(
      `ams-grid__cell--colspan-${narrow}`,
      `ams-grid__cell--colspan-${medium}-medium`,
      `ams-grid__cell--colspan-${wide}-wide`,
    )
  }

  if (typeof start === 'number') {
    classes.push(`ams-grid__cell--start-${start}`)
  } else if (start) {
    const { narrow, medium, wide } = start
    classes.push(
      `ams-grid__cell--start-${narrow}`,
      `ams-grid__cell--start-${medium}-medium`,
      `ams-grid__cell--start-${wide}-wide`,
    )
  }

  if (rowspan === 'all' || typeof rowspan === 'number') {
    classes.push(`ams-grid__cell--rowspan-${rowspan}`)
  } else if (rowspan) {
    const { narrow, medium, wide } = rowspan
    classes.push(
      `ams-grid__cell--rowspan-${narrow}`,
      `ams-grid__cell--rowspan-${medium}-medium`,
      `ams-grid__cell--rowspan-${wide}-wide`,
    )
  }

  if (typeof row === 'number') {
    classes.push(`ams-grid__cell--row-${row}`)
  } else if (row) {
    const { narrow, medium, wide } = row
    classes.push(
      `ams-grid__cell--row-${narrow}`,
      `ams-grid__cell--row-${medium}-medium`,
      `ams-grid__cell--row-${wide}-wide`,
    )
  }

  return classes
}
