/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableRowProps = PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>

export const TableRow = forwardRef(
  ({ children, className, ...restProps }: TableRowProps, ref: ForwardedRef<HTMLTableRowElement>) => (
    <tr {...restProps} ref={ref} className={clsx('ams-table__row', className)}>
      {children}
    </tr>
  ),
)

TableRow.displayName = 'TableRow'
