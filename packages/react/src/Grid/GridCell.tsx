/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { GridColumnNumber } from './Grid'
import { gridCellClasses } from './gridCellClasses'
import type { ResponsiveGridValues } from '../common/types'

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

export type GridCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (GridCellSpanAllProp | GridCellSpanAndStartProps) &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const GridCell = forwardRef(
  ({ as: Tag = 'div', children, className, span, start, ...restProps }: GridCellProps, ref: any) => (
    <Tag {...restProps} ref={ref} className={clsx('ams-grid__cell', gridCellClasses(span, start), className)}>
      {children}
    </Tag>
  ),
)

GridCell.displayName = 'Grid.Cell'
