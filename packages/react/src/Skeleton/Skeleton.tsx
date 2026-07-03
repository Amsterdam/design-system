/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const skeletonAppearances = ['card', 'heading', 'list', 'paragraph', 'table'] as const
type SkeletonAppearance = (typeof skeletonAppearances)[number]

export type SkeletonProps = {
  /**
   * The kind of content to mimic.
   * @default paragraph
   */
  readonly appearance?: SkeletonAppearance
  /**
   * The number of columns. Applies to the table appearance.
   * @default 3
   */
  readonly columns?: number
  /**
   * The number of lines of text. Applies to the card, list, and paragraph appearances.
   * @default 3
   */
  readonly lines?: number
  /**
   * The number of rows, excluding the header row. Applies to the table appearance.
   * @default 3
   */
  readonly rows?: number
} & Readonly<HTMLAttributes<HTMLDivElement>>

const renderLines = (count: number) =>
  Array.from({ length: count }, (_, index) => <div className="ams-skeleton__line" key={index} />)

const renderListItems = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <div className="ams-skeleton__list-item" key={index}>
      <div className="ams-skeleton__marker" />
      <div className="ams-skeleton__line" />
    </div>
  ))

const renderTableCells = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <div className="ams-skeleton__table-cell" key={index}>
      <div className="ams-skeleton__line" />
    </div>
  ))

const renderTableRows = (rowCount: number, columnCount: number) => (
  <>
    <div className="ams-skeleton__table-row ams-skeleton__table-row--header">{renderTableCells(columnCount)}</div>
    {Array.from({ length: rowCount }, (_, index) => (
      <div className="ams-skeleton__table-row" key={index}>
        {renderTableCells(columnCount)}
      </div>
    ))}
  </>
)

/**
 * Grey shapes that stand in for content while it loads.
 * Mimics the dimensions of the final content, limiting layout shifts when it arrives.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-skeleton--docs Skeleton docs at Amsterdam Design System}
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ appearance = 'paragraph', className, columns = 3, lines = 3, rows = 3, ...restProps }, ref) => (
    <div
      aria-hidden
      {...restProps}
      className={clsx('ams-skeleton', `ams-skeleton--${appearance}`, className)}
      ref={ref}
    >
      {appearance === 'card' && (
        <>
          <div className="ams-skeleton__image" />
          <div className="ams-skeleton__line ams-skeleton__line--heading" />
          {renderLines(lines)}
        </>
      )}
      {appearance === 'heading' && <div className="ams-skeleton__line" />}
      {appearance === 'list' && renderListItems(lines)}
      {appearance === 'paragraph' && renderLines(lines)}
      {appearance === 'table' && renderTableRows(rows, columns)}
    </div>
  ),
)

Skeleton.displayName = 'Skeleton'
