/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableBodyProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

export const TableBody = forwardRef(
  ({ children, className, ...restProps }: TableBodyProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tbody {...restProps} ref={ref} className={clsx('ams-table__body', className)}>
      {children}
    </tbody>
  ),
)

TableBody.displayName = 'Table.Body'
