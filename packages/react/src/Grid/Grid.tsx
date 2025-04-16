/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { GridCell } from './GridCell'
import { paddingClasses } from './paddingClasses'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type GridColumnNumbers = {
  narrow: 1 | 2 | 3 | 4
  medium: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
  wide: GridColumnNumber
}

export const gridGaps = ['none', 'large', '2x-large'] as const
export type GridGap = (typeof gridGaps)[number]

export const gridPaddings = ['large', 'x-large', '2x-large'] as const
export type GridPadding = (typeof gridPaddings)[number]

export const gridTags = ['article', 'aside', 'div', 'footer', 'header', 'main', 'nav', 'section'] as const
export type GridTag = (typeof gridTags)[number]

type GridPaddingVerticalProp = {
  paddingBottom?: never
  paddingTop?: never
  /** The amount of space above and below. */
  paddingVertical?: GridPadding
}

type GridPaddingTopAndBottomProps = {
  /** The amount of space below. */
  paddingBottom?: GridPadding
  /** The amount of space above. */
  paddingTop?: GridPadding
  paddingVertical?: never
}

export type GridProps = {
  /** The HTML tag to use. */
  as?: GridTag
  /** The amount of space between rows. */
  gapVertical?: GridGap
} & (GridPaddingVerticalProp | GridPaddingTopAndBottomProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const GridRoot = forwardRef(
  (
    {
      as: Tag = 'div',
      children,
      className,
      gapVertical,
      paddingBottom,
      paddingTop,
      paddingVertical,
      ...restProps
    }: GridProps,
    ref: ForwardedRef<any>,
  ) => (
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
  ),
)

GridRoot.displayName = 'Grid'

export const Grid = Object.assign(GridRoot, { Cell: GridCell })
