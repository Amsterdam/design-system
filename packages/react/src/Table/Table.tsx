/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type {
  ForwardedRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
  TableHTMLAttributes,
} from 'react'
import { TableBody } from './TableBody'
import { TableCaption } from './TableCaption'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableHeaderCell } from './TableHeaderCell'
import { TableRow } from './TableRow'

export interface TableProps extends PropsWithChildren<TableHTMLAttributes<HTMLTableElement>> {}

export interface TableComponent extends ForwardRefExoticComponent<TableProps & RefAttributes<HTMLTableElement>> {
  Body: typeof TableBody
  Caption: typeof TableCaption
  Cell: typeof TableCell
  Footer: typeof TableFooter
  Header: typeof TableHeader
  HeaderCell: typeof TableHeaderCell
  Row: typeof TableRow
}

export const Table = forwardRef(
  ({ children, className, ...restProps }: TableProps, ref: ForwardedRef<HTMLTableElement>) => (
    <div className="amsterdam-table">
      <table {...restProps} ref={ref} className={clsx('amsterdam-table__table', className)}>
        {children}
      </table>
    </div>
  ),
) as TableComponent

Table.Body = TableBody
Table.Caption = TableCaption
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

Table.displayName = 'Table'
Table.Body.displayName = 'Table.Body'
Table.Caption.displayName = 'Table.Caption'
Table.Cell.displayName = 'Table.Cell'
Table.Footer.displayName = 'Table.Footer'
Table.Header.displayName = 'Table.Header'
Table.HeaderCell.displayName = 'Table.HeaderCell'
Table.Row.displayName = 'Table.Row'
