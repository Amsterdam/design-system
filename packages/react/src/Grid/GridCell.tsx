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
  span: 'all'
  start?: never
}

type GridCellSpanAndStartProps = {
  /** The amount of grid columns the cell spans. */
  span?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: GridColumnNumber | GridColumnNumbers
}

type GridCellOwnProps = {
  /**
   * Controls the background of the Grid Cell.
   *
   * In Compact Mode, cells have a background colour and padding to set them apart.
   * The flush variant removes the padding but keeps the background colour.
   * The transparent variant removes both background and padding.
   *
   * In Spacious Mode, cells are always transparent and without padding; this prop has no effect.
   */
  appearance?: GridCellAppearance
  /** The HTML tag to use. */
  as?: GridCellTag
  /** The amount of grid rows the cell spans. */
  rowSpan?: GridRowNumber | GridRowNumbers
}

type GridCellSpanKeys = 'span' | 'start'

export type GridCellProps = GridCellOwnProps &
  PropsWithChildren<Omit<HTMLAttributes<HTMLElement>, GridCellSpanKeys>> &
  (GridCellSpanAllProp | GridCellSpanAndStartProps)

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
