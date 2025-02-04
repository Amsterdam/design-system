/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableHeaderProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

export const TableHeader = forwardRef(
  ({ children, className, ...restProps }: TableHeaderProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <thead {...restProps} className={clsx('ams-table__header', className)} ref={ref}>
      {children}
    </thead>
  ),
)

TableHeader.displayName = 'Table.Header'
