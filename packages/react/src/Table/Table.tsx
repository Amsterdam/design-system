/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, PropsWithChildren, TableHTMLAttributes } from 'react'
import { TableBody } from './TableBody'
import { TableCaption } from './TableCaption'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { TableRow } from './TableRow'

export type TableProps = PropsWithChildren<TableHTMLAttributes<HTMLTableElement>>

const TableRoot = forwardRef(
  ({ children, className, ...restProps }: TableProps, ref: ForwardedRef<HTMLTableElement>) => (
    <div className="ams-table">
      <table {...restProps} ref={ref} className={clsx('ams-table__table', className)}>
        {children}
      </table>
    </div>
  ),
)

TableRoot.displayName = 'Table'

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Header: TableHeader,
  HeaderCell: TableHeaderCell,
  Row: TableRow,
})
