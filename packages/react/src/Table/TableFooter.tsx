/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableFooterProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

export const TableFooter = forwardRef(
  ({ children, className, ...restProps }: TableFooterProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tfoot {...restProps} ref={ref} className={clsx('ams-table__footer', className)}>
      {children}
    </tfoot>
  ),
)

TableFooter.displayName = 'Table.Footer'
