/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { BreakoutSpotlightRowNumber, BreakoutSpotlightRowNumbers } from './BreakoutSpotlight'
import { breakoutSpotlightCellClasses } from './breakoutSpotlightCellClasses'
import type { GridColumnNumber, GridColumnNumbers } from '../Grid/Grid'

type BreakoutSpotlightCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  colSpan: 'all'
  colStart?: never
  /** The content of this cell.
   * The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
   * The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text. */
  has?: 'spotlight'
}

type BreakoutSpotlightCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  colSpan?: 'all' | GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  colStart?: GridColumnNumber | GridColumnNumbers
  has?: 'figure'
}

type BreakoutSpotlightCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: BreakoutSpotlightRowNumber | BreakoutSpotlightRowNumbers
  /** The index of the grid row the cell starts at. */
  rowStart?: BreakoutSpotlightRowNumber | BreakoutSpotlightRowNumbers
}

export type BreakoutSpotlightCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (BreakoutSpotlightCellSpanAllProp | BreakoutSpotlightCellSpanAndStartProps) &
  BreakoutSpotlightCellRowSpanAndStartProps &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const BreakoutSpotlightCell = forwardRef(
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
    }: BreakoutSpotlightCellProps,
    ref: any,
  ) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-breakout-spotlight__cell',
        breakoutSpotlightCellClasses(colSpan, colStart, rowSpan, rowStart),
        has && `ams-breakout-spotlight__cell--has-${has}`,
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

BreakoutSpotlightCell.displayName = 'BreakoutSpotlight.Cell'
