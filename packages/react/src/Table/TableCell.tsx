/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, PropsWithChildren, TdHTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export const tableCellAlignOptions = ['center', 'end'] as const
type TableCellAlign = (typeof tableCellAlignOptions)[number]

export type TableCellProps = {
  /** The horizontal alignment of the cell’s content. */
  readonly align?: TableCellAlign
} & Readonly<PropsWithChildren<Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'>>>

export const TableCell = forwardRef(
  ({ align, children, className, ...restProps }: TableCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <td
      {...restProps}
      className={clsx('ams-table__cell', align && `ams-table__cell--align-${align}`, className)}
      ref={ref}
    >
      {children}
    </td>
  ),
)

TableCell.displayName = 'Table.Cell'
