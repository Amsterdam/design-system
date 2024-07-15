/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { GridColumnNumber, ResponsiveGridValues } from './Grid'
import { gridCellClasses } from './gridCellClasses'

type GridCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  span: 'all'
  start?: never
}

type GridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  span?: ResponsiveGridValues<GridColumnNumber>
  /** The index of the grid column the cell starts at. */
  start?: ResponsiveGridValues<GridColumnNumber>
}

type GridCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: ResponsiveGridValues<number>
  /** The index of the grid row the cell starts at. */
  rowStart?: ResponsiveGridValues<number>
}

export type GridCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (GridCellSpanAllProp | GridCellSpanAndStartProps) &
  GridCellRowSpanAndStartProps &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const GridCell = forwardRef(
  ({ as: Tag = 'div', children, className, rowSpan, rowStart, span, start, ...restProps }: GridCellProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx('ams-grid__cell', gridCellClasses(rowSpan, rowStart, span, start), className)}
    >
      {children}
    </Tag>
  ),
)

GridCell.displayName = 'Grid.Cell'
