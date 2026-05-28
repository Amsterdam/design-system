/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridColumnNumber, GridColumnNumbers } from '../Grid/Grid'
import type { BreakoutRowNumber, BreakoutRowNumbers } from './Breakout'

import { breakoutCellClasses } from './breakoutCellClasses'

export const breakoutCellTags = ['article', 'div', 'section'] as const
type BreakoutCellTag = (typeof breakoutCellTags)[number]

type BreakoutCellSpanAllProps = {
  /** Lets the cell span the full width of all grid variants. */
  readonly colSpan: 'all'
  readonly colStart?: never
  /** The content of this cell.
   * The Cell containing the Spotlight expands horizontally and vertically to cover the adjacent gaps and margins.
   * The Cell containing the Image aligns itself to the bottom of the row, in case it is less tall than the text. */
  readonly has?: 'spotlight'
}

type BreakoutCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  readonly colSpan?: 'all' | GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  readonly colStart?: GridColumnNumber | GridColumnNumbers
  readonly has?: 'figure'
}

type BreakoutCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  readonly rowSpan?: BreakoutRowNumber | BreakoutRowNumbers
  /** The index of the grid row the cell starts at. */
  readonly rowStart?: BreakoutRowNumber | BreakoutRowNumbers
}

export type BreakoutCellProps = {
  /** The HTML element to use. */
  readonly as?: BreakoutCellTag
} & Readonly<BreakoutCellRowSpanAndStartProps> &
  Readonly<BreakoutCellSpanAllProps | BreakoutCellSpanAndStartProps> &
  Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>>

export const BreakoutCell = forwardRef<HTMLElement, BreakoutCellProps>(
  ({ as, children, className, colSpan, colStart, has, rowSpan, rowStart, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag
        {...restProps}
        className={clsx(
          'ams-breakout__cell',
          breakoutCellClasses(colSpan, colStart, rowSpan, rowStart),
          has && `ams-breakout__cell--has-${has}`,
          className,
        )}
        ref={ref}
      >
        {children}
      </Tag>
    )
  },
)

BreakoutCell.displayName = 'Breakout.Cell'
