/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'

export type GridCellProps = PropsWithChildren<{
  gridColumns?: {
    start?: PageGridColumnNumber
    span: PageGridColumnNumber
  }
}>

export const gridColumnClassNames = (gridColumns?: GridCellProps['gridColumns']) => {
  if (!gridColumns) {
    return undefined
  }

  const { start, span } = gridColumns

  return clsx(start && `amsterdam-grid-column-start-${start}`, span && `amsterdam-grid-column-span-${span}`)
}

export const GridCell = ({ children, gridColumns }: GridCellProps) => (
  <div className={clsx('amsterdam-grid-cell', gridColumnClassNames(gridColumns))}>{children}</div>
)

GridCell.displayName = 'GridCell'
