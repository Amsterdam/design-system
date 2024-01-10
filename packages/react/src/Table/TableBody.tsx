/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface TableBodyProps extends PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>> {}

export const TableBody = forwardRef(
  ({ children, className, ...restProps }: TableBodyProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tbody {...restProps} ref={ref} className={clsx('amsterdam-table__body', className)}>
      {children}
    </tbody>
  ),
)

TableBody.displayName = 'TableBody'
