/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { IconProps } from '../Icon'

import { Icon } from '../Icon'

export type PageHeaderMenuLinkProps = {
  /** Whether the link appears in the Page Header on narrow windows. */
  readonly fixed?: boolean
  /** An icon to display at the end of the label. */
  readonly icon?: IconProps['svg']
  /**
   * The React component or intrinsic element to use for the link.
   * Refs are forwarded only to a plain anchor (the default, or `linkComponent="a"`), not to any other `linkComponent`.
   */
  readonly linkComponent?: ElementType
} & Readonly<PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>>

export const PageHeaderMenuLink = forwardRef(
  (
    { children, className, fixed, icon, linkComponent, ...restProps }: PageHeaderMenuLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const Tag = linkComponent || 'a'

    return (
      <li className={clsx('ams-page-header__menu-item', fixed && 'ams-page-header__menu-item--fixed')}>
        <Tag
          {...restProps}
          className={clsx('ams-page-header__menu-link', className)}
          {...((!linkComponent || linkComponent === 'a') && { ref })}
        >
          {children}
          {icon && <Icon svg={icon} />}
        </Tag>
      </li>
    )
  },
)

PageHeaderMenuLink.displayName = 'PageHeader.MenuLink'
