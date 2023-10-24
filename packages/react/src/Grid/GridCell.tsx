/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'
import { gridColumnClassNames } from './gridColumnClassNames'

/**
 * One or three values to configure grid columns with.
 * Three values apply to narrow, medium and wide grids, respectively.
 */
export type PageGridColumnValue =
  | PageGridColumnNumber
  | [PageGridColumnNumber, PageGridColumnNumber, PageGridColumnNumber]

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the cell should span the full width of the grid. */
  fullWidth?: boolean
  /** The amount of grid columns the cell should span. */
  span?: PageGridColumnValue
  /** The index of the grid column the cell should start at. */
  start?: PageGridColumnValue
}

export const GridCell = forwardRef(
  (
    { children, className, fullWidth, span, start, ...restProps }: PropsWithChildren<GridCellProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid-cell',
        fullWidth && 'amsterdam-grid-cell-full-width',
        gridColumnClassNames(start, span),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridCell.displayName = 'GridCell'
