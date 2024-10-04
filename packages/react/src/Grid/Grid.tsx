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

export type ValidSpan<Start extends number> = Start extends 12
  ? Range<1, 13>
  : Start extends 11
    ? Range<1, 12>
    : Start extends 10
      ? Range<1, 11>
      : Start extends 9
        ? Range<1, 10>
        : Start extends 8
          ? Range<1, 9>
          : Start extends 7
            ? Range<1, 8>
            : Start extends 6
              ? Range<1, 7>
              : Start extends 5
                ? Range<1, 6>
                : Start extends 4
                  ? Range<1, 5>
                  : Start extends 3
                    ? Range<1, 4>
                    : Start extends 2
                      ? Range<1, 3>
                      : Start extends 1
                        ? 1
                        : never

export type GridNarrowColumnNumber = 1 | 2 | 3 | 4
export type GridMediumColumnNumber = GridNarrowColumnNumber | 5 | 6 | 7 | 8
export type GridWideColumnNumber = GridMediumColumnNumber | 9 | 10 | 11 | 12
export type GridColumnNumbers = {
  narrow: GridNarrowColumnNumber
  medium: GridMediumColumnNumber
  wide: GridWideColumnNumber
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
