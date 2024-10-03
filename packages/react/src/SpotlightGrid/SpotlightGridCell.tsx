/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { SpotlightGridRowNumber, SpotlightGridRowNumbers } from './SpotlightGrid'
import { spotlightGridCellClasses } from './spotlightGridCellClasses'
import type { GridColumnNumber, GridColumnNumbers } from '../Grid/Grid'

type SpotlightGridCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  colSpan: 'all'
  colStart?: never
  /** The content of this cell.
   * The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
   * The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text. */
  has?: 'spotlight'
}

type SpotlightGridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  colSpan?: 'all' | GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  colStart?: GridColumnNumber | GridColumnNumbers
  has?: 'figure'
}

type SpotlightGridCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: SpotlightGridRowNumber | SpotlightGridRowNumbers
  /** The index of the grid row the cell starts at. */
  rowStart?: SpotlightGridRowNumber | SpotlightGridRowNumbers
}

export type SpotlightGridCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (SpotlightGridCellSpanAllProp | SpotlightGridCellSpanAndStartProps) &
  SpotlightGridCellRowSpanAndStartProps &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const SpotlightGridCell = forwardRef(
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
    }: SpotlightGridCellProps,
    ref: any,
  ) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-spotlight-grid__cell',
        spotlightGridCellClasses(colSpan, colStart, rowSpan, rowStart),
        has && `ams-spotlight-grid__cell--has-${has}`,
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

SpotlightGridCell.displayName = 'SpotlightGrid.Cell'
