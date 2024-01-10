/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, TdHTMLAttributes } from 'react'

export interface TableCellProps extends PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>> {}

export const TableCell = forwardRef(
  ({ children, className, ...restProps }: TableCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <td {...restProps} ref={ref} className={clsx('amsterdam-table__cell', className)}>
      {children}
    </td>
  ),
)

TableCell.displayName = 'TableCell'
