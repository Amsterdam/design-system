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
export type GridColumnNumbers = { narrow: GridColumnNumber; medium: GridColumnNumber; wide: GridColumnNumber }
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
