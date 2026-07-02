/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const placeholderAppearances = ['card', 'heading', 'list', 'paragraph', 'table'] as const
type PlaceholderAppearance = (typeof placeholderAppearances)[number]

export type PlaceholderProps = {
  /**
   * The kind of content to mimic.
   * @default paragraph
   */
  readonly appearance?: PlaceholderAppearance
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
  Array.from({ length: count }, (_, index) => <div className="ams-placeholder__line" key={index} />)

const renderListItems = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <div className="ams-placeholder__list-item" key={index}>
      <div className="ams-placeholder__marker" />
      <div className="ams-placeholder__line" />
    </div>
  ))

const renderTableCells = (count: number) =>
  Array.from({ length: count }, (_, index) => (
    <div className="ams-placeholder__table-cell" key={index}>
      <div className="ams-placeholder__line" />
    </div>
  ))

const renderTableRows = (rowCount: number, columnCount: number) => (
  <>
    <div className="ams-placeholder__table-row ams-placeholder__table-row--header">{renderTableCells(columnCount)}</div>
    {Array.from({ length: rowCount }, (_, index) => (
      <div className="ams-placeholder__table-row" key={index}>
        {renderTableCells(columnCount)}
      </div>
    ))}
  </>
)

/**
 * Grey shapes that stand in for content while it loads.
 * Mimics the dimensions of the final content, limiting layout shifts when it arrives.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-feedback-placeholder--docs Placeholder docs at Amsterdam Design System}
 */
export const Placeholder = forwardRef<HTMLDivElement, PlaceholderProps>(
  ({ appearance = 'paragraph', className, columns = 3, lines = 3, rows = 3, ...restProps }, ref) => (
    <div
      aria-hidden
      {...restProps}
      className={clsx('ams-placeholder', `ams-placeholder--${appearance}`, className)}
      ref={ref}
    >
      {appearance === 'card' && (
        <>
          <div className="ams-placeholder__image" />
          <div className="ams-placeholder__heading" />
          {renderLines(lines)}
        </>
      )}
      {appearance === 'heading' && <div className="ams-placeholder__heading" />}
      {appearance === 'list' && renderListItems(lines)}
      {appearance === 'paragraph' && renderLines(lines)}
      {appearance === 'table' && renderTableRows(rows, columns)}
    </div>
  ),
)

Placeholder.displayName = 'Placeholder'
