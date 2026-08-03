/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridSubgridProps } from './GridSubgrid'

import { addGridClass } from './gridCellClasses'

export const gridSubgridClasses = (
  colSpan?: GridSubgridProps['span'],
  colStart?: GridSubgridProps['start'],
  rowSpan?: GridSubgridProps['rowSpan'],
  rowStart?: GridSubgridProps['rowStart'],
): string[] => [
  ...addGridClass('ams-grid__subgrid--span-', colSpan),
  ...addGridClass('ams-grid__subgrid--start-', colStart),
  ...addGridClass('ams-grid__subgrid--row-span-', rowSpan),
  ...addGridClass('ams-grid__subgrid--row-start-', rowStart),
]
