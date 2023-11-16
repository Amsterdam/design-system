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

type GridMarginSize = 'small' | 'medium' | 'large'

export type GridProps = {
  /**
   * The density of the grid: low (for websites) or high (for applications).
   * Adjusts the pace with which columns get wider, and the start width as well.
   * This is to be implemented more generally – it will be moved into a theme soon.
   */
  density?: GridDensity
  marginBottom?: GridMarginSize
  marginTop?: GridMarginSize
  marginVertical?: GridMarginSize
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const marginClasses = (
  density: GridDensity,
  marginBottom?: GridMarginSize,
  marginTop?: GridMarginSize,
  marginVertical?: GridMarginSize,
): string[] => {
  const classes = [] as string[]

  if (marginVertical) {
    return [`amsterdam-grid--density-${density}--margin-vertical--${marginVertical}`]
  }

  if (marginBottom) {
    classes.push(`amsterdam-grid--density-${density}--margin-bottom--${marginBottom}`)
  }

  if (marginTop) {
    classes.push(`amsterdam-grid--density-${density}--margin-top--${marginTop}`)
  }

  return classes
}

interface GridComponent extends ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>> {
  Cell: typeof GridCell
}

export const Grid = forwardRef(
  (
    { children, className, density = 'low', marginBottom, marginTop, marginVertical, ...restProps }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid',
        density && `amsterdam-grid--density-${density}`,
        marginClasses(density, marginBottom, marginTop, marginVertical),
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
