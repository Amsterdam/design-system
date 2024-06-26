/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { GridColumnNumber, GridColumnNumbers, GridRowNumber, GridRowNumbers } from './Grid'
import { gridCellClasses } from './gridCellClasses'

type GridCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  colspan: 'all'
  start?: never
  row?: GridRowNumber | GridRowNumbers
  rowspan?: 'all'
}

type GridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  colspan?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: GridColumnNumber | GridColumnNumbers
  row?: GridRowNumber | GridRowNumbers
  rowspan?: GridRowNumber | GridRowNumbers
}

export type GridCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (GridCellSpanAllProp | GridCellSpanAndStartProps) &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const GridCell = forwardRef(
  ({ as: Tag = 'div', children, className, colspan, start, row, rowspan, ...restProps }: GridCellProps, ref: any) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx('ams-grid__cell', gridCellClasses(colspan, start, rowspan, row), className)}
    >
      {children}
    </Tag>
  ),
)

GridCell.displayName = 'Grid.Cell'
