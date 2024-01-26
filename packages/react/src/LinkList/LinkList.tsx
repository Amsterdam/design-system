/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'
import { LinkListLink } from './LinkListLink'

export interface LinkListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}

interface LinkListComponent extends ForwardRefExoticComponent<LinkListProps & RefAttributes<HTMLUListElement>> {
  Link: typeof LinkListLink
}

/** A collection of related links. */
export const LinkList = forwardRef(
  ({ children, className, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul ref={ref} className={clsx('amsterdam-link-list', className)} {...restProps}>
        {children}
      </ul>
    )
  },
) as LinkListComponent

LinkList.Link = LinkListLink
LinkList.displayName = 'LinkList'
