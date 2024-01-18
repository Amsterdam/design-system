/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

export interface LinkListProps extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {
  size?: 'small' | 'large'
}

interface LinkListComponent extends ForwardRefExoticComponent<LinkListProps & RefAttributes<HTMLUListElement>> {}

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

LinkList.displayName = 'LinkList'
