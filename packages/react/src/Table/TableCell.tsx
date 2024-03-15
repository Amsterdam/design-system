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
    <td {...restProps} ref={ref} className={clsx('ams-table__cell', className)}>
      {children}
    </td>
  ),
)

TableCell.displayName = 'Table.Cell'
