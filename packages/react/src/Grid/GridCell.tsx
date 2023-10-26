/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageGridColumnNumber, PageGridColumnNumbers } from './PageGrid'
import { gridCellClasses } from './gridCellClasses'

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the cell spans the full width of the grid. */
  fullWidth?: boolean
  /** The amount of grid columns the cell spans. */
  span?: PageGridColumnNumber | PageGridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: PageGridColumnNumber | PageGridColumnNumbers
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
        gridCellClasses(start, span),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridCell.displayName = 'GridCell'
