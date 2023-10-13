/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'
import { PageGridColumnNumber } from './PageGrid'

type OneOrThreeGridCellValues =
  | PageGridColumnNumber
  | [PageGridColumnNumber, PageGridColumnNumber, PageGridColumnNumber]

export interface GridCellProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
  span?: OneOrThreeGridCellValues
  start?: OneOrThreeGridCellValues
}

export const gridColumnClassNames = (start?: OneOrThreeGridCellValues, span?: OneOrThreeGridCellValues) => {
  let classes = []

  if (start) {
    if (typeof start === 'number') {
      classes.push(`amsterdam-grid-start-${start}`)
    } else {
      const [narrow, medium, wide] = start

      classes.push(
        `amsterdam-narrow-grid-start-${narrow}`,
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
        `amsterdam-narrow-grid-span-${narrow}`,
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
