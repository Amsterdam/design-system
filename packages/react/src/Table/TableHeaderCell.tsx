/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, PropsWithChildren, ThHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { tableCellAlignOptions } from './TableCell'

type TableHeaderCellAlign = (typeof tableCellAlignOptions)[number]

export type TableHeaderCellProps = {
  /** The horizontal alignment of the cell’s content. */
  readonly align?: TableHeaderCellAlign
} & Readonly<PropsWithChildren<Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'>>>

/**
 * A header cell within a Table that labels a column or row.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-table--docs Table docs at Amsterdam Design System}
 */
export const TableHeaderCell = forwardRef(
  ({ align, children, className, ...restProps }: TableHeaderCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <th
      {...restProps}
      className={clsx('ams-table__header-cell', align && `ams-table__header-cell--align-${align}`, className)}
      ref={ref}
    >
      {children}
    </th>
  ),
)

TableHeaderCell.displayName = 'Table.HeaderCell'
