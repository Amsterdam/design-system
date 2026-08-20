/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ElementType, ForwardedRef, PropsWithChildren, ThHTMLAttributes } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { tableCellAlignOptions } from './TableCell'

import { Icon } from '../Icon'
import { Link } from '../Link'

type TableSortableHeaderCellAlign = (typeof tableCellAlignOptions)[number]

export type TableSortableHeaderCellProps = {
  /** The horizontal alignment of the cell’s content. */
  readonly align?: TableSortableHeaderCellAlign
  /** The URL of this page sorted by this column, in the direction activating the link will apply. */
  readonly href: string
  /** The React component or intrinsic element to use for the link. */
  readonly linkComponent?: ElementType
  /** The direction the table is currently sorted in by this column. */
  readonly sortDirection?: 'ascending' | 'descending' | 'none'
} & Readonly<PropsWithChildren<Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'>>>

/**
 * A header cell within a Table that labels a column and links to the table sorted by it.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-table--docs Table docs at Amsterdam Design System}
 */
export const TableSortableHeaderCell = forwardRef(
  (
    {
      align,
      children,
      className,
      href,
      linkComponent,
      sortDirection = 'none',
      ...restProps
    }: TableSortableHeaderCellProps,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <th
      {...restProps}
      aria-sort={sortDirection}
      className={clsx(
        'ams-table__header-cell',
        'ams-table__sortable-header-cell',
        align && `ams-table__header-cell--align-${align}`,
        className,
      )}
      ref={ref}
    >
      <Link className="ams-table__sortable-header-cell-link" href={href} linkComponent={linkComponent}>
        {children}
        {/* The chevron renders in every state: on a sorted column it shows the current direction, on an unsorted
            one the direction the first activation applies. Rendering it always reserves its width, so sorting a
            column does not change the width of the row. */}
        <Icon
          className="ams-table__sortable-header-cell-icon"
          svg={sortDirection === 'descending' ? ChevronDownIcon : ChevronUpIcon}
        />
      </Link>
    </th>
  ),
)

TableSortableHeaderCell.displayName = 'Table.SortableHeaderCell'
