/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type TableOfContentsListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const TableOfContentsList = forwardRef(
  ({ children, className, ...restProps }: TableOfContentsListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul {...restProps} ref={ref} className={clsx('ams-table-of-contents__list', className)}>
        {children}
      </ul>
    )
  },
)

TableOfContentsList.displayName = 'TableOfContents.List'
