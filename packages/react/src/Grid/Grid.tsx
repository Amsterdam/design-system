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
import { gridCellClasses } from './gridCellClasses'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridColumnNumbers = {
  narrow: GridColumnNumber
  medium: GridColumnNumber
  wide: GridColumnNumber
}

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
   * Opts in to a less spacious layout.
   * Decreases whitespace between columns and to the sides of the grid.
   * This usually works well for applications.
   * @todo Implement more generally – it will be moved into a theme soon.
   */
  compact?: boolean
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
    { children, className, compact, gapVertical, paddingBottom, paddingTop, paddingVertical, ...restProps }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid',
        compact && `amsterdam-grid--compact`,
        gapVertical && `amsterdam-grid--gap-vertical--${gapVertical}`,
        paddingClasses(paddingBottom, paddingTop, paddingVertical),
        className,
      )}
    >
      {children}
    </div>
  ),
) as GridComponent

type GridCellFullWidthProp = {
  /** Whether the cell spans the full width of the grid. */
  fullWidth?: boolean
  span?: never
  start?: never
}

type GridCellColumnProps = {
  fullWidth?: never
  /** The amount of grid columns the cell spans. */
  span?: GridColumnNumber | GridColumnNumbers
  /** The index of the grid column the cell starts at. */
  start?: GridColumnNumber | GridColumnNumbers
}

export type GridCellProps = (GridCellFullWidthProp | GridCellColumnProps) &
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const GridCell = forwardRef(
  ({ children, className, fullWidth, span, start, ...restProps }: GridCellProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid__cell',
        fullWidth && 'amsterdam-grid__cell--full-width',
        gridCellClasses(span, start),
        className,
      )}
    >
      {children}
    </div>
  ),
)

Grid.Cell = GridCell
Grid.displayName = 'Grid'
GridCell.displayName = 'Grid.Cell'
