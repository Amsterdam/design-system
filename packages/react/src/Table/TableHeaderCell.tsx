/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, ThHTMLAttributes } from 'react'

export type TableHeaderCellProps = PropsWithChildren<ThHTMLAttributes<HTMLTableCellElement>>

export const TableHeaderCell = forwardRef(
  ({ children, className, ...restProps }: TableHeaderCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <th {...restProps} className={clsx('ams-table__header-cell', className)} ref={ref}>
      {children}
    </th>
  ),
)

TableHeaderCell.displayName = 'Table.HeaderCell'
