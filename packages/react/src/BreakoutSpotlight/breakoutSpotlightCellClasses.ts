/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { BreakoutSpotlightCellProps } from './BreakoutSpotlightCell'
import { addGridClass } from '../Grid/gridCellClasses'

export const breakoutSpotlightCellClasses = (
  colSpan?: BreakoutSpotlightCellProps['colSpan'],
  colStart?: BreakoutSpotlightCellProps['colStart'],
  rowSpan?: BreakoutSpotlightCellProps['rowSpan'],
  rowStart?: BreakoutSpotlightCellProps['rowStart'],
): string[] => [
  ...addGridClass('ams-breakout-spotlight__cell--col-span-', colSpan),
  ...addGridClass('ams-breakout-spotlight__cell--col-start-', colStart),
  ...addGridClass('ams-breakout-spotlight__cell--row-span-', rowSpan),
  ...addGridClass('ams-breakout-spotlight__cell--row-start-', rowStart),
]
