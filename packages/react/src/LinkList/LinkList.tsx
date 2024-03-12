/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { LinkListLink } from './LinkListLink'

export type LinkListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

type LinkListComponent = {
  Link: typeof LinkListLink
} & ForwardRefExoticComponent<LinkListProps & RefAttributes<HTMLUListElement>>

/** A collection of related links. */
export const LinkList = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul ref={ref} className={clsx('ams-link-list', className)} {...restProps}>
        {children}
      </ul>
    )
  },
) as LinkListComponent

LinkList.Link = LinkListLink
LinkList.displayName = 'LinkList'
