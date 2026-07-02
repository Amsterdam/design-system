/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { GridCell } from './GridCell'
import { paddingClasses } from './paddingClasses'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GridColumnNumbers = {
  narrow: 1 | 2 | 3 | 4
  medium: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  wide: GridColumnNumber
}

export type GridRowNumber = 1 | 2 | 3 | 4
export type GridRowNumbers = { narrow: GridRowNumber; medium: GridRowNumber; wide: GridRowNumber }

export const gridGaps = ['none', 'large', '2x-large'] as const
export type GridGap = (typeof gridGaps)[number]

export const gridPaddings = ['large', 'x-large', '2x-large'] as const
export type GridPadding = (typeof gridPaddings)[number]

export const gridTags = ['article', 'aside', 'div', 'footer', 'header', 'main', 'nav', 'section'] as const
export type GridTag = (typeof gridTags)[number]

type GridPaddingVerticalProp = {
  readonly paddingBottom?: never
  readonly paddingTop?: never
  /** The amount of space above and below. */
  readonly paddingVertical?: GridPadding
}

type GridPaddingTopAndBottomProps = {
  /** The amount of space below. */
  readonly paddingBottom?: GridPadding
  /** The amount of space above. */
  readonly paddingTop?: GridPadding
  readonly paddingVertical?: never
}

export type GridProps = {
  /**
   * The HTML tag to use.
   * @default div
   */
  readonly as?: GridTag
  /** The amount of space between rows. */
  readonly gapVertical?: GridGap
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLElement>>> &
  (GridPaddingVerticalProp | GridPaddingTopAndBottomProps)

const GridRoot = forwardRef<HTMLElement, GridProps>(
  ({ as, children, className, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }, ref) => {
    const Tag = (as ?? 'div') as ElementType

    return (
      <Tag
        {...restProps}
        className={clsx(
          'ams-grid',
          gapVertical && `ams-grid--gap-vertical--${gapVertical}`,
          paddingClasses('grid', paddingBottom, paddingTop, paddingVertical),
          className,
        )}
        ref={ref}
      >
        {children}
      </Tag>
    )
  },
)

GridRoot.displayName = 'Grid'

/**
 * Divides the screen into columns to align the elements of a page.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-layout-grid--docs Grid docs at Amsterdam Design System}
 */
export const Grid = Object.assign(GridRoot, { Cell: GridCell })
