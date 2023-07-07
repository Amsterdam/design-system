/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'

export type GridCellProps = PropsWithChildren<{
  gridColumns?: [PageGridColumnNumber, PageGridColumnNumber]
}>

export const gridCellClassNames = (gridColumns?: [PageGridColumnNumber, PageGridColumnNumber]) => {
  if (!gridColumns) {
    return undefined
  }

  const [start, end] = gridColumns

  return clsx(start && `amsterdam-grid-start-${start}`, end && `amsterdam-grid-end-${end}`)
}

export const GridCell = ({ children, gridColumns }: GridCellProps) => (
  <div className={clsx('amsterdam-grid-cell', gridCellClassNames(gridColumns))}>{children}</div>
)

GridCell.displayName = 'GridCell'
