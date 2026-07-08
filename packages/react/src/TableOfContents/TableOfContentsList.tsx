/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useContext } from 'react'

import { TableOfContentsListContext } from './TableOfContentsListContext'

export type TableOfContentsListProps = {
  /**
   * Whether descendant items with nested lists start expanded.
   * Inherits from the parent list when omitted.
   * @default false
   */
  readonly defaultExpanded?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

/**
 * The list of section links within a Table of Contents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table of Contents docs at Amsterdam Design System}
 */
export const TableOfContentsList = forwardRef(
  (
    { children, className, defaultExpanded, ...restProps }: TableOfContentsListProps,
    ref: ForwardedRef<HTMLUListElement>,
  ) => {
    const parentExpanded = useContext(TableOfContentsListContext)
    const expandedByDefault = defaultExpanded ?? parentExpanded

    return (
      <TableOfContentsListContext.Provider value={expandedByDefault}>
        <ul {...restProps} className={clsx('ams-table-of-contents__list', className)} ref={ref}>
          {children}
        </ul>
      </TableOfContentsListContext.Provider>
    )
  },
)

TableOfContentsList.displayName = 'TableOfContents.List'
