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
  align?: TableHeaderCellAlign
} & PropsWithChildren<Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'>>

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
