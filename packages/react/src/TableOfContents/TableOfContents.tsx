/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TableOfContentsLink } from './TableOfContentsLink'
import { TableOfContentsList } from './TableOfContentsList'

export type TableOfContentsProps = {
  /** The Heading for the Table of Contents. */
  heading?: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

const TableOfContentsRoot = forwardRef(
  ({ children, className, heading, ...restProps }: TableOfContentsProps, ref: ForwardedRef<HTMLElement>) => {
    return (
      <nav {...restProps} ref={ref} className={clsx('ams-table-of-contents', className)}>
        {heading && <div className="ams-table-of-contents__heading">{heading}</div>}
        {children}
      </nav>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

export const TableOfContents = Object.assign(TableOfContentsRoot, {
  Link: TableOfContentsLink,
  List: TableOfContentsList,
})
