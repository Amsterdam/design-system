/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { GridCell } from './GridCell'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridColumnNumbers = {
  narrow: GridColumnNumber
  medium: GridColumnNumber
  wide: GridColumnNumber
}

export type GridPaddingSize = 'small' | 'medium' | 'large'

type GridPaddingVerticalProp = {
  paddingBottom?: never
  paddingTop?: never
  /** The amount of vertical white space above and below the grid. */
  paddingVertical?: GridPaddingSize
}

type GridPaddingTopAndBottomProps = {
  /** The amount of vertical white space below the grid. */
  paddingBottom?: GridPaddingSize
  /** The amount of vertical white space above the grid. */
  paddingTop?: GridPaddingSize
  paddingVertical?: never
}

export type GridProps = {
  /** The amount of vertical white space between rows of the grid. */
  gapVertical?: 'none' | 'small' | 'large'
} & (GridPaddingVerticalProp | GridPaddingTopAndBottomProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const paddingClasses = (
  paddingBottom?: GridPaddingSize,
  paddingTop?: GridPaddingSize,
  paddingVertical?: GridPaddingSize,
): string[] => {
  const classes = [] as string[]

  if (paddingVertical) {
    return [`ams-grid--padding-vertical--${paddingVertical}`]
  }

  if (paddingBottom) {
    classes.push(`ams-grid--padding-bottom--${paddingBottom}`)
  }

  if (paddingTop) {
    classes.push(`ams-grid--padding-top--${paddingTop}`)
  }

  return classes
}

type GridComponent = {
  Cell: typeof GridCell
} & ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>>

export const Grid = forwardRef(
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
        paddingClasses(paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
) as GridComponent

Grid.Cell = GridCell
Grid.displayName = 'Grid'
