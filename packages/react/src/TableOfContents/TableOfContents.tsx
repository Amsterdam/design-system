/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { TableOfContentsLink } from './TableOfContentsLink'

export type TableOfContentsProps = {
  title?: string
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const TableOfContentsRoot = forwardRef(
  ({ children, className, title, ...restProps }: TableOfContentsProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <nav {...restProps} ref={ref} className={clsx('ams-table-of-contents', className)}>
        {title && <div className="ams-table-of-contents__title">{title}</div>}
        <ol className="ams-table-of-contents__list">{children}</ol>
      </nav>
    )
  },
)

TableOfContentsRoot.displayName = 'TableOfContents'

export const TableOfContents = Object.assign(TableOfContentsRoot, { Link: TableOfContentsLink })
