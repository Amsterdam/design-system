/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridColumnNumber, GridColumnNumbers, GridRowNumber, GridRowNumbers } from './Grid'

import { gridCellClasses } from './gridCellClasses'

export const gridCellAppearances = ['flush', 'transparent'] as const
export type GridCellAppearance = (typeof gridCellAppearances)[number]

export const gridCellTags = ['article', 'aside', 'div', 'footer', 'header', 'main', 'nav', 'section'] as const
export type GridCellTag = (typeof gridCellTags)[number]

type GridCellSpanAllProp = {
  /** Lets the cell span the full width of all grid variants. */
  readonly span: 'all'
  readonly start?: never
}

type GridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  readonly span?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  readonly start?: GridColumnNumber | GridColumnNumbers
}

export type GridCellProps = {
  /**
   * Controls the background of the cell.
   *
   * In Compact Mode, cells have a background colour and padding to set them apart.
   * The flush variant removes the padding but keeps the background colour.
   * The transparent variant removes both background and padding.
   *
   * In Spacious Mode, cells are always transparent and without padding; this prop has no effect.
   */
  readonly appearance?: GridCellAppearance
  /**
   * The HTML tag to use.
   * @default div
   */
  readonly as?: GridCellTag
  /** The amount of grid rows the cell spans. */
  readonly rowSpan?: GridRowNumber | GridRowNumbers
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>> &
  (GridCellSpanAllProp | GridCellSpanAndStartProps)

/**
 * One cell within the Grid, spanning one or more columns and optionally rows.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-grid--docs Grid docs at Amsterdam Design System}
 */
export const GridCell = forwardRef<HTMLElement, GridCellProps>(
  ({ appearance, as, children, className, rowSpan, span, start, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag
        {...restProps}
        className={clsx(
          'ams-grid__cell',
          appearance && `ams-grid__cell--${appearance}`,
          gridCellClasses(span, start, rowSpan),
          className,
        )}
        ref={ref}
      >
        {children}
      </Tag>
    )
  },
)

GridCell.displayName = 'Grid.Cell'
