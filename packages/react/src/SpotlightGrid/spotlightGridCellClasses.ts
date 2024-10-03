/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { SpotlightGridCellProps } from './SpotlightGridCell'
import { addGridClass } from '../Grid/gridCellClasses'

export const spotlightGridCellClasses = (
  colSpan?: SpotlightGridCellProps['colSpan'],
  colStart?: SpotlightGridCellProps['colStart'],
  rowSpan?: SpotlightGridCellProps['rowSpan'],
  rowStart?: SpotlightGridCellProps['rowStart'],
): string[] => [
  ...addGridClass('ams-spotlight-grid__cell--col-span-', colSpan),
  ...addGridClass('ams-spotlight-grid__cell--col-start-', colStart),
  ...addGridClass('ams-spotlight-grid__cell--row-span-', rowSpan),
  ...addGridClass('ams-spotlight-grid__cell--row-start-', rowStart),
]
