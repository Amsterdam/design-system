/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { ChevronRightIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, type HTMLAttributes } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardedRef,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Icon } from '../Icon'

type LinkOnBackground = 'default' | 'light' | 'dark'

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

export interface LinkListLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  href: string
  icon?: Function
  onBackground?: LinkOnBackground
  size?: LinkListProps['size']
}

interface LinkListLinkComponent
  extends ForwardRefExoticComponent<LinkListLinkProps & RefAttributes<HTMLAnchorElement>> {}

export const LinkListLink = forwardRef(
  (
    { children, className, href, icon, onBackground, size, ...restProps }: LinkListLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <li>
        <a
          className={clsx(
            'amsterdam-link-list__link',
            onBackground && `amsterdam-link-list__link--on-background-${onBackground}`,
            className,
          )}
          href={href}
          ref={ref}
          {...restProps}
        >
          <Icon svg={icon ?? ChevronRightIcon} size={size === 'small' ? 'level-6' : 'level-5'} />
          {children}
        </a>
      </li>
    )
  },
) as LinkListLinkComponent

LinkList.displayName = 'LinkList'
LinkListLink.displayName = 'LinkList.Link'
