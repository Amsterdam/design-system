/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import type { PageGridColumnNumber, PageGridColumnNumbers } from './PageGrid'
import { gridCellClasses } from './gridCellClasses'

type GridCellFullWidthProp = {
  /** Whether the cell spans the full width of the grid. */
  fullWidth?: boolean
  span?: never
  start?: never
}

type GridCellColumnProps = {
  fullWidth?: never
  /** The amount of grid columns the cell spans. */
  span?: PageGridColumnNumber | PageGridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: PageGridColumnNumber | PageGridColumnNumbers
}

// The discriminated union and the `never` types prevent using `fullWidth` together with `span` or `start`.
export type GridCellProps = (GridCellFullWidthProp | GridCellColumnProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const GridCell = forwardRef(
  ({ children, className, fullWidth, span, start, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid-cell',
        fullWidth && 'amsterdam-grid-cell--full-width',
        gridCellClasses(span, start),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridCell.displayName = 'GridCell'
