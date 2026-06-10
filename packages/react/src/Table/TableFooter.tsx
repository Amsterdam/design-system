/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableFooterProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

/**
 * The footer section of a Table, typically containing summary rows.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-table--docs Table docs at Amsterdam Design System}
 */
export const TableFooter = forwardRef(
  ({ children, className, ...restProps }: TableFooterProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tfoot {...restProps} className={clsx('ams-table__footer', className)} ref={ref}>
      {children}
    </tfoot>
  ),
)

TableFooter.displayName = 'Table.Footer'
