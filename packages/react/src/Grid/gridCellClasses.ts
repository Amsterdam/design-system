/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridCellProps } from './GridCell'

export const gridCellClasses = (
  rowSpan?: GridCellProps['rowSpan'],
  rowStart?: GridCellProps['rowStart'],
  span?: GridCellProps['span'],
  start?: GridCellProps['start'],
): string[] => {
  if (!span && !start) {
    return []
  }

  const classes = [] as string[]

  if (span === 'all' || typeof span === 'number') {
    classes.push(`ams-grid__cell--span-${span}`)
  } else if (span) {
    const { narrow, medium, wide } = span
    classes.push(
      `ams-grid__cell--span-${narrow}`,
      `ams-grid__cell--span-${medium}-medium`,
      `ams-grid__cell--span-${wide}-wide`,
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

  if (typeof rowSpan === 'number') {
    classes.push(`ams-grid__cell--row-span-${rowSpan}`)
  } else if (rowSpan) {
    const { narrow, medium, wide } = rowSpan
    classes.push(
      `ams-grid__cell--row-span-${narrow}`,
      `ams-grid__cell--row-span-${medium}-medium`,
      `ams-grid__cell--row-span-${wide}-wide`,
    )
  }

  if (typeof rowStart === 'number') {
    classes.push(`ams-grid__cell--row-start-${rowStart}`)
  } else if (rowStart) {
    const { narrow, medium, wide } = rowStart
    classes.push(
      `ams-grid__cell--row-start-${narrow}`,
      `ams-grid__cell--row-start-${medium}-medium`,
      `ams-grid__cell--row-start-${wide}-wide`,
    )
  }

  return classes
}
