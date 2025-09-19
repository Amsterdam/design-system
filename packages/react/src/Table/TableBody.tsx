/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableBodyProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

export const TableBody = forwardRef(
  ({ children, className, ...restProps }: TableBodyProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tbody {...restProps} className={clsx('ams-table__body', className)} ref={ref}>
      {children}
    </tbody>
  ),
)

TableBody.displayName = 'Table.Body'
