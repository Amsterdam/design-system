/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { GridCell } from './GridCell'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridColumnNumbers = {
  narrow: GridColumnNumber
  medium: GridColumnNumber
  wide: GridColumnNumber
}

type GridDensity = 'low' | 'high'

type GridPaddingSize = 'small' | 'medium' | 'large'

type GridPaddingVerticalProp = {
  paddingBottom?: never
  paddingTop?: never
  /** The amount of vertical whitespace above and below the grid. */
  paddingVertical?: GridPaddingSize
}

type GridPaddingTopAndBottomProps = {
  /** The amount of vertical whitespace below the grid. */
  paddingBottom?: GridPaddingSize
  /** The amount of vertical whitespace above the grid. */
  paddingTop?: GridPaddingSize
  paddingVertical?: never
}

export type GridProps = {
  /**
   * The density of the grid: low (for websites) or high (for applications).
   * Adjusts the pace with which columns get wider, and the start width as well.
   * This is to be implemented more generally – it will be moved into a theme soon.
   */
  density?: GridDensity
  /** The amount of vertical whitespace between rows of the grid. */
  gapVertical?: 'small' | 'large'
} & (GridPaddingVerticalProp | GridPaddingTopAndBottomProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const paddingClasses = (
  paddingBottom?: GridPaddingSize,
  paddingTop?: GridPaddingSize,
  paddingVertical?: GridPaddingSize,
): string[] => {
  const classes = [] as string[]

  if (paddingVertical) {
    return [`amsterdam-grid--padding-vertical--${paddingVertical}`]
  }

  if (paddingBottom) {
    classes.push(`amsterdam-grid--padding-bottom--${paddingBottom}`)
  }

  if (paddingTop) {
    classes.push(`amsterdam-grid--padding-top--${paddingTop}`)
  }

  return classes
}

interface GridComponent extends ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>> {
  Cell: typeof GridCell
}

export const Grid = forwardRef(
  (
    {
      children,
      className,
      density = 'low',
      gapVertical,
      paddingBottom,
      paddingTop,
      paddingVertical,
      ...restProps
    }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid',
        density && `amsterdam-grid--density-${density}`,
        gapVertical && `amsterdam-grid--gap-vertical--${gapVertical}`,
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
GridCell.displayName = 'Grid.Cell'
