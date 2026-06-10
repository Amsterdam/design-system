/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableRowProps = PropsWithChildren<HTMLAttributes<HTMLTableRowElement>>

/**
 * A single row within a Table.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-table--docs Table docs at Amsterdam Design System}
 */
export const TableRow = forwardRef(
  ({ children, className, ...restProps }: TableRowProps, ref: ForwardedRef<HTMLTableRowElement>) => (
    <tr {...restProps} className={clsx('ams-table__row', className)} ref={ref}>
      {children}
    </tr>
  ),
)

TableRow.displayName = 'Table.Row'
