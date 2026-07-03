/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type SkeletonTableProps = {
  /**
   * The number of columns.
   * @default 3
   */
  readonly columns?: number
  /**
   * The number of body rows, excluding the header row.
   * @default 3
   */
  readonly rows?: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

const renderCells = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <div className="ams-skeleton__table-cell" key={index}>
      <div className="ams-skeleton__line" />
    </div>
  ))

/**
 * A grid of cells that stands in for a table while it loads.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const SkeletonTable = forwardRef(
  ({ className, columns = 3, rows = 3, ...restProps }: SkeletonTableProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-skeleton__table', className)} ref={ref}>
      <div className="ams-skeleton__table-row ams-skeleton__table-row--header">{renderCells(columns)}</div>
      {Array.from({ length: rows }, (_, index) => (
        <div className="ams-skeleton__table-row" key={index}>
          {renderCells(columns)}
        </div>
      ))}
    </div>
  ),
)

SkeletonTable.displayName = 'Skeleton.Table'
