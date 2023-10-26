/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'

/**
 * One or three values to configure grid columns with.
 * Three values apply to narrow, medium and wide grids, respectively.
 */
type PageGridColumnValue = PageGridColumnNumber | [PageGridColumnNumber, PageGridColumnNumber, PageGridColumnNumber]

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the cell should span the full width of the grid. */
  fullWidth?: boolean
  /** The amount of grid columns the cell should span. */
  span?: PageGridColumnValue
  /** The index of the grid column the cell should start at. */
  start?: PageGridColumnValue
}

export const gridColumnClassNames = (start?: PageGridColumnValue, span?: PageGridColumnValue) => {
  let classes = []

  if (start) {
    if (typeof start === 'number') {
      classes.push(`amsterdam-grid-start-${start}`)
    } else {
      const [narrow, medium, wide] = start

      classes.push(
        `amsterdam-grid-start-${narrow}`,
        `amsterdam-medium-grid-start-${medium}`,
        `amsterdam-wide-grid-start-${wide}`,
      )
    }
  }

  if (span) {
    if (typeof span === 'number') {
      classes.push(`amsterdam-grid-span-${span}`)
    } else {
      const [narrow, medium, wide] = span

      classes.push(
        `amsterdam-grid-span-${narrow}`,
        `amsterdam-medium-grid-span-${medium}`,
        `amsterdam-wide-grid-span-${wide}`,
      )
    }
  }

  return classes
}

export const GridCell = forwardRef(
  (
    { children, className, fullWidth, span, start, ...restProps }: PropsWithChildren<GridCellProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-grid-cell',
        fullWidth && 'amsterdam-grid-cell-full-width',
        gridColumnClassNames(start, span),
        className,
      )}
    >
      {children}
    </div>
  ),
)

GridCell.displayName = 'GridCell'
