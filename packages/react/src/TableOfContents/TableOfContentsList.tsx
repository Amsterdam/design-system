/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type TableOfContentsListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

/**
 * The list of section links within a Table of Contents.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-navigation-table-of-contents--docs Table of Contents docs at Amsterdam Design System}
 */
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
