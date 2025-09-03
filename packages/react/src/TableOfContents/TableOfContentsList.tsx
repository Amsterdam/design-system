/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import clsx from 'clsx'
import { forwardRef } from 'react'

export type TableOfContentsListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const TableOfContentsList = forwardRef(
  ({ children, className, ...restProps }: TableOfContentsListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul {...restProps} className={clsx('ams-table-of-contents__list', className)} ref={ref}>
        {children}
      </ul>
    )
  },
)

TableOfContentsList.displayName = 'TableOfContents.List'
