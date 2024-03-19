/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { LinkListLink } from './LinkListLink'

export type LinkListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

/** A collection of related links. */
const LinkListRoot = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul ref={ref} className={clsx('ams-link-list', className)} {...restProps}>
        {children}
      </ul>
    )
  },
)

LinkListRoot.displayName = 'LinkList'

export const LinkList = Object.assign(LinkListRoot, { Link: LinkListLink })
