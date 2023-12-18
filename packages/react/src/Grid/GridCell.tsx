/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */
import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react'
import { GridColumnNumber, GridColumnNumbers } from './Grid'
import { gridCellClasses } from './gridCellClasses'

type GridCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  span: 'all'
  start?: never
}

type GridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  span?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: GridColumnNumber | GridColumnNumbers
}

export type GridCellProps = (GridCellSpanAllProp | GridCellSpanAndStartProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const GridCell = forwardRef(
  ({ children, className, span, start, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-grid__cell', gridCellClasses(span, start), className)}>
      {children}
    </div>
  ),
)

GridCell.displayName = 'Grid.Cell'
