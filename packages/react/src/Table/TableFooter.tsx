/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

export type TableFooterProps = PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>

export const TableFooter = forwardRef(
  ({ children, className, ...restProps }: TableFooterProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tfoot {...restProps} className={clsx('ams-table__footer', className)} ref={ref}>
      {children}
    </tfoot>
  ),
)

TableFooter.displayName = 'Table.Footer'
