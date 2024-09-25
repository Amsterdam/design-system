/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { BreakoutRowNumber } from './Breakout'
import { breakoutCellClasses } from './breakoutCellClasses'
import type { GridColumnNumber, ResponsiveGridValues } from '../Grid'

type BreakoutCellSpanAllProp = {
  /** Expand the cell horizontally and vertically to cover its adjacent gaps and margins. */
  coverGap?: boolean
  /** Lets the cell span the full width of all grid variants. */
  colSpan: 'all'
  colStart?: never
}

type BreakoutCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  colSpan?: ResponsiveGridValues<GridColumnNumber>
  /** The index of the grid column the cell starts at. */
  colStart?: ResponsiveGridValues<GridColumnNumber>
  coverGap?: never
}

type BreakoutCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: ResponsiveGridValues<BreakoutRowNumber>
  /** The index of the grid row the cell starts at. */
  rowStart?: ResponsiveGridValues<BreakoutRowNumber>
}

export type BreakoutCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (BreakoutCellSpanAllProp | BreakoutCellSpanAndStartProps) &
  BreakoutCellRowSpanAndStartProps &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const BreakoutCell = forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      className,
      colSpan,
      colStart,
      coverGap,
      rowSpan,
      rowStart,
      ...restProps
    }: BreakoutCellProps,
    ref: any,
  ) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-breakout__cell',
        coverGap && 'ams-breakout__cell--cover-gap',
        breakoutCellClasses(colSpan, colStart, rowSpan, rowStart),
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

BreakoutCell.displayName = 'Breakout.Cell'
