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
import type { SpaceProps } from '../shared/space'
import { spaceClasses } from '../shared/space'

export type GridColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridColumnNumbers = {
  narrow: GridColumnNumber
  medium: GridColumnNumber
  wide: GridColumnNumber
}

type GridDensity = 'low' | 'high'

export type GridProps = {
  /**
   * The density of the grid: low (for websites) or high (for applications).
   * Adjusts the pace with which columns get wider, and the start width as well.
   * This is to be implemented more generally – it will be moved into a theme soon.
   */
  density?: GridDensity
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>> &
  SpaceProps

interface GridComponent extends ForwardRefExoticComponent<GridProps & RefAttributes<HTMLDivElement>> {
  Cell: typeof GridCell
}

export const Grid = forwardRef(
  (
    { children, className, density = 'low', spaceBottom, spaceTop, spaceVertical, ...restProps }: GridProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid',
        density && `amsterdam-grid--density-${density}`,
        spaceClasses(spaceBottom, spaceTop, spaceVertical),
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
