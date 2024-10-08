/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { BreakoutRowNumber, BreakoutRowNumbers } from './Breakout'
import { breakoutCellClasses } from './breakoutCellClasses'
import type {
  GridColumnNumbers,
  GridMediumColumnNumber,
  GridNarrowColumnNumber,
  GridWideColumnNumber,
} from '../Grid/Grid'

type BreakoutCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  colSpan: 'all'
  colStart?: never
  /** The content of this cell.
   * The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
   * The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text. */
  has?: 'spotlight'
}

type BreakoutCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  colSpan?: 'all' | GridNarrowColumnNumber | GridMediumColumnNumber | GridWideColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  colStart?: GridNarrowColumnNumber | GridMediumColumnNumber | GridWideColumnNumber | GridColumnNumbers
  has?: 'figure'
}

type BreakoutCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: BreakoutRowNumber | BreakoutRowNumbers
  /** The index of the grid row the cell starts at. */
  rowStart?: BreakoutRowNumber | BreakoutRowNumbers
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
      has,
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
        breakoutCellClasses(colSpan, colStart, rowSpan, rowStart),
        has && `ams-breakout__cell--has-${has}`,
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

BreakoutCell.displayName = 'Breakout.Cell'
