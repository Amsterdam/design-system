/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableHeaderProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

/**
 * The header section of a Table, containing column labels.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-table--docs Table docs at Amsterdam Design System}
 */
export const TableHeader = forwardRef(
  ({ children, className, ...restProps }: TableHeaderProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <thead {...restProps} className={clsx('ams-table__header', className)} ref={ref}>
      {children}
    </thead>
  ),
)

TableHeader.displayName = 'Table.Header'
