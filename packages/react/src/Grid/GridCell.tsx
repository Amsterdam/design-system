/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'

export type GridColumns =
  | PageGridColumnNumber
  | {
      start?: PageGridColumnNumber
      span: PageGridColumnNumber
    }

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  gridColumns?: GridColumns
}

export const gridColumnClassNames = (gridColumns?: GridColumns) => {
  if (!gridColumns) {
    return ''
  }

  if (typeof gridColumns === 'number') {
    return `amsterdam-grid-column-span-${gridColumns}`
  }

  const { start, span } = gridColumns

  return clsx(start && `amsterdam-grid-column-start-${start}`, span && `amsterdam-grid-column-span-${span}`)
}

export const GridCell = forwardRef(
  (
    { children, gridColumns, className, ...restProps }: PropsWithChildren<GridCellProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-grid-cell', gridColumnClassNames(gridColumns), className)}>
      {children}
    </div>
  ),
)

GridCell.displayName = 'GridCell'
