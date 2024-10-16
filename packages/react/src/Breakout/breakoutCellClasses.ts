/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { BreakoutCellProps } from './BreakoutCell'
import { addGridClass } from '../Grid/gridCellClasses'

export const breakoutCellClasses = (
  colSpan?: BreakoutCellProps['colSpan'],
  colStart?: BreakoutCellProps['colStart'],
  rowSpan?: BreakoutCellProps['rowSpan'],
  rowStart?: BreakoutCellProps['rowStart'],
): string[] => [
  ...addGridClass('ams-breakout__cell--col-span-', colSpan),
  ...addGridClass('ams-breakout__cell--col-start-', colStart),
  ...addGridClass('ams-breakout__cell--row-span-', rowSpan),
  ...addGridClass('ams-breakout__cell--row-start-', rowStart),
]
