/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, TdHTMLAttributes } from 'react'

export type TableCellProps = PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>

export const TableCell = forwardRef(
  ({ children, className, ...restProps }: TableCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <td {...restProps} className={clsx('ams-table__cell', className)} ref={ref}>
      {children}
    </td>
  ),
)

TableCell.displayName = 'Table.Cell'
