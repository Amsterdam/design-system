/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridColumnNumber, GridColumnNumbers, GridRowNumber, GridRowNumbers } from './Grid'

import { gridSubgridClasses } from './gridSubgridClasses'

/**
 * A Subgrid inherits the row gap of the Grid, so it needs a value for the x-large that Grid has by default.
 * Without it, a Subgrid inside a Grid that lowers its gap has no way back to the regular spacing.
 */
export const gridSubgridGaps = ['none', 'large', 'x-large', '2x-large'] as const
export type GridSubgridGap = (typeof gridSubgridGaps)[number]

/**
 * The tags of a Grid Cell, plus the two list elements. A Subgrid can be the list a set of Cells belongs to;
 * a Cell cannot, since its children are content rather than list items.
 */
export const gridSubgridTags = [
  'article',
  'aside',
  'div',
  'footer',
  'header',
  'li',
  'main',
  'nav',
  'ol',
  'section',
  'ul',
] as const
export type GridSubgridTag = (typeof gridSubgridTags)[number]

type GridSubgridSpanAllProp = {
  /** Lets the subgrid span the full width of all grid variants. */
  readonly span: 'all'
  readonly start?: never
}

type GridSubgridSpanAndStartProps = {
  /**
   * The amount of grid columns the subgrid spans, and therefore the amount of columns its children can use.
   * Accepts a number, an object of numbers per grid variant – narrow, medium, and wide – or ‘all’ to span the full width.
   */
  readonly span?: GridColumnNumber | GridColumnNumbers
  /**
   * The index of the grid column the subgrid starts at.
   * Accepts a number or an object of numbers per grid variant.
   */
  readonly start?: GridColumnNumber | GridColumnNumbers
}

export type GridSubgridProps = {
  /**
   * The HTML tag to use.
   * @default div
   */
  readonly as?: GridSubgridTag
  /**
   * The amount of space between the rows of the subgrid.
   * Defaults to the vertical gap of the Grid.
   */
  readonly gapVertical?: GridSubgridGap
  /**
   * The amount of grid rows the subgrid spans.
   * Accepts a number or an object of numbers per grid variant.
   */
  readonly rowSpan?: GridRowNumber | GridRowNumbers
  /**
   * The index of the grid row the subgrid starts at.
   * Accepts a number or an object of numbers per grid variant.
   *
   * Only needed to place a subgrid before a sibling that starts at an earlier column:
   * automatic placement never moves back a column without moving down a row.
   */
  readonly rowStart?: GridRowNumber | GridRowNumbers
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>> &
  (GridSubgridSpanAllProp | GridSubgridSpanAndStartProps)

/**
 * A region of the Grid that shares its columns with its children, so they align to the columns of the page.
 * Every direct child must be a Grid Cell, or another Subgrid if part of the region is a set of its own.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-grid--docs Grid docs at Amsterdam Design System}
 */
export const GridSubgrid = forwardRef<HTMLElement, GridSubgridProps>(
  ({ as, children, className, gapVertical, rowSpan, rowStart, span, start, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag
        {...restProps}
        className={clsx(
          'ams-grid__subgrid',
          gapVertical && `ams-grid__subgrid--gap-vertical--${gapVertical}`,
          gridSubgridClasses(span, start, rowSpan, rowStart),
          className,
        )}
        ref={ref}
      >
        {children}
      </Tag>
    )
  },
)

GridSubgrid.displayName = 'Grid.Subgrid'
