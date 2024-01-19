/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import type { ForwardedRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes } from 'react'
import { forwardRef, type HTMLAttributes } from 'react'
import { LinkListLink } from './LinkListLink'

export interface LinkListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {
  size?: 'small' | 'large'
}

interface LinkListComponent extends ForwardRefExoticComponent<LinkListProps & RefAttributes<HTMLUListElement>> {
  Link: typeof LinkListLink
}

export const LinkList = forwardRef(
  ({ children, className, size, ...restProps }: LinkListProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul
        ref={ref}
        className={clsx('amsterdam-link-list', size && `amsterdam-link-list--${size}`, className)}
        {...restProps}
      >
        {children}
      </ul>
    )
  },
) as LinkListComponent

LinkList.Link = LinkListLink
LinkList.displayName = 'LinkList'
