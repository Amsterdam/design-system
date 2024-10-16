/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { GridCell } from './GridCell'
import { paddingClasses } from './paddingClasses'

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type GridColumnNumber = Range<1, 13>
export type GridColumnNumbers = {
  narrow: Range<1, 5>
  medium: Range<1, 9>
  wide: Range<1, 13>
}
export type GridPaddingSize = 'small' | 'medium' | 'large'

type GridPaddingVerticalProp = {
  paddingBottom?: never
  paddingTop?: never
  /** The amount of space above and below. */
  paddingVertical?: GridPaddingSize
}

type GridPaddingTopAndBottomProps = {
  /** The amount of space below. */
  paddingBottom?: GridPaddingSize
  /** The amount of space above. */
  paddingTop?: GridPaddingSize
  paddingVertical?: never
}

export type GridProps = {
  /** The amount of space between rows. */
  gapVertical?: 'none' | 'small' | 'large'
} & (GridPaddingVerticalProp | GridPaddingTopAndBottomProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const GridRoot = forwardRef(
  (
    { children, className, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'ams-grid',
        gapVertical && `ams-grid--gap-vertical--${gapVertical}`,
        paddingClasses('grid', paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridRoot.displayName = 'Grid'

export const Grid = Object.assign(GridRoot, { Cell: GridCell })
