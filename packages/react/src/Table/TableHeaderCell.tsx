/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, ThHTMLAttributes } from 'react'

export interface TableHeaderCellProps extends PropsWithChildren<ThHTMLAttributes<HTMLTableCellElement>> {}

export const TableHeaderCell = forwardRef(
  ({ children, className, ...restProps }: TableHeaderCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <th {...restProps} ref={ref} className={clsx('amsterdam-table__header-cell', className)}>
      {children}
    </th>
  ),
)

TableHeaderCell.displayName = 'TableHeaderCell'
