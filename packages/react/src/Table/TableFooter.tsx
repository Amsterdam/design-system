/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface TableFooterProps extends PropsWithChildren<HTMLAttributes<HTMLTableSectionElement>> {}

export const TableFooter = forwardRef(
  ({ children, className, ...restProps }: TableFooterProps, ref: ForwardedRef<HTMLTableSectionElement>) => (
    <tfoot {...restProps} ref={ref} className={clsx('amsterdam-table__footer', className)}>
      {children}
    </tfoot>
  ),
)

TableFooter.displayName = 'TableFooter'
