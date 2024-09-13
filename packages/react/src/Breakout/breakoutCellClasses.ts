/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { BreakoutCellProps } from './BreakoutCell'

export const breakoutCellClasses = (
  colSpan?: BreakoutCellProps['colSpan'],
  colStart?: BreakoutCellProps['colStart'],
  rowSpan?: BreakoutCellProps['rowSpan'],
  rowStart?: BreakoutCellProps['rowStart'],
): string[] => {
  if (!colSpan && !colStart && !rowSpan && !rowStart) {
    return []
  }

  const classes = [] as string[]

  if (colSpan === 'all' || typeof colSpan === 'number') {
    classes.push(`ams-breakout__cell--col-span-${colSpan}`)
  } else if (colSpan) {
    const { narrow, medium, wide } = colSpan
    classes.push(
      `ams-breakout__cell--col-span-${narrow}`,
      `ams-breakout__cell--col-span-${medium}-medium`,
      `ams-breakout__cell--col-span-${wide}-wide`,
    )
  }

  if (typeof colStart === 'number') {
    classes.push(`ams-breakout__cell--col-start-${colStart}`)
  } else if (colStart) {
    const { narrow, medium, wide } = colStart
    classes.push(
      `ams-breakout__cell--col-start-${narrow}`,
      `ams-breakout__cell--col-start-${medium}-medium`,
      `ams-breakout__cell--col-start-${wide}-wide`,
    )
  }

  if (typeof rowSpan === 'number') {
    classes.push(`ams-breakout__cell--row-span-${rowSpan}`)
  } else if (rowSpan) {
    const { narrow, medium, wide } = rowSpan
    classes.push(
      `ams-breakout__cell--row-span-${narrow}`,
      `ams-breakout__cell--row-span-${medium}-medium`,
      `ams-breakout__cell--row-span-${wide}-wide`,
    )
  }

  if (typeof rowStart === 'number') {
    classes.push(`ams-breakout__cell--row-start-${rowStart}`)
  } else if (rowStart) {
    const { narrow, medium, wide } = rowStart
    classes.push(
      `ams-breakout__cell--row-start-${narrow}`,
      `ams-breakout__cell--row-start-${medium}-medium`,
      `ams-breakout__cell--row-start-${wide}-wide`,
    )
  }

  return classes
}
