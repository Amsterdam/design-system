/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { BreakoutColumnNumber, BreakoutRowNumber, ResponsiveBreakoutValues } from './Breakout'
import { breakoutCellClasses } from './breakoutCellClasses'

type BreakoutCellSpanAllProp = {
  /** Expand the cell horizontally and vertically to cover its adjacent gaps and margins. */
  coverGap?: boolean
  /** Lets the cell span the full width of all grid variants. */
  span: 'all'
  start?: never
}

type BreakoutCellSpanAndStartProps = {
  coverGap?: never
  /** The amount of grid columns the cell spans. */
  span?: ResponsiveBreakoutValues<BreakoutColumnNumber>
  /** The index of the grid column the cell starts at. */
  start?: ResponsiveBreakoutValues<BreakoutColumnNumber>
}

type BreakoutCellRowSpanAndStartProps = {
  /** The amount of grid rows the cell spans. */
  rowSpan?: ResponsiveBreakoutValues<BreakoutRowNumber>
  /** The index of the grid row the cell starts at. */
  rowStart?: ResponsiveBreakoutValues<BreakoutRowNumber>
}

export type BreakoutCellProps = {
  /** The HTML element to use. */
  as?: 'article' | 'div' | 'section'
} & (BreakoutCellSpanAllProp | BreakoutCellSpanAndStartProps) &
  BreakoutCellRowSpanAndStartProps &
  PropsWithChildren<HTMLAttributes<HTMLElement>>

export const BreakoutCell = forwardRef(
  (
    { as: Tag = 'div', children, className, coverGap, rowSpan, rowStart, span, start, ...restProps }: BreakoutCellProps,
    ref: any,
  ) => (
    <Tag
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-breakout__cell',
        coverGap && 'ams-breakout__cell--cover-gap',
        breakoutCellClasses(rowSpan, rowStart, span, start),
        className,
      )}
    >
      {children}
    </Tag>
  ),
)

BreakoutCell.displayName = 'Breakout.Cell'
