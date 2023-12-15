/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */
import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react'
import { GridColumnNumber, GridColumnNumbers } from './Grid'
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
  span?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: GridColumnNumber | GridColumnNumbers
}

export type GridCellProps = (GridCellFullWidthProp | GridCellColumnProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const GridCell = forwardRef(
  ({ children, className, fullWidth, span, start, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid__cell',
        fullWidth && 'amsterdam-grid__cell--full-width',
        gridCellClasses(span, start),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridCell.displayName = 'Grid.Cell'
