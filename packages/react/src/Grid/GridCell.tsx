/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { GridColumnNumber, GridColumnNumbers } from './Grid'

import { gridCellClasses } from './gridCellClasses'

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

export type GridCellProps = {
  /**
   * Controls the background of the Grid Cell.
   *
   * In Compact Mode, cells have a background colour and padding to clearly set them apart.
   * The flush variant removes the padding, while the transparent variant removes both background and padding.
   *
   * In Spacious Mode, cells are always transparent and without padding; this prop has no effect.
   */
  appearance?: 'flush' | 'transparent'
  /** The HTML tag to use. */
  as?: GridCellTag
} & PropsWithChildren<HTMLAttributes<HTMLElement>> &
  (GridCellSpanAllProp | GridCellSpanAndStartProps)

export const GridCell = forwardRef(
  (
    { appearance, as: Tag = 'div', children, className, span, start, ...restProps }: GridCellProps,
    ref: ForwardedRef<any>,
  ) => (
    <Tag
      {...restProps}
      className={clsx(
        'ams-grid__cell',
        appearance && `ams-grid__cell--${appearance}`,
        gridCellClasses(span, start),
        className,
      )}
      ref={ref}
    >
      {children}
    </Tag>
  ),
)

GridCell.displayName = 'Grid.Cell'
