/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ForwardRefExoticComponent,
  HTMLAttributes,
  PropsWithChildren,
  RefAttributes,
} from 'react'
import { Icon } from '../Icon'

type PageMenuProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

interface PageMenuComponent extends ForwardRefExoticComponent<PageMenuProps & RefAttributes<HTMLElement>> {
  Link: typeof PageMenuLink
  Button: typeof PageMenuButton
}

export const PageMenu = forwardRef(
  ({ children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul {...restProps} className={clsx('amsterdam-page-menu', className)} ref={ref}>
        {children}
      </ul>
    )
  },
) as PageMenuComponent

export interface PageMenuLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  icon?: Function
  showOnMobile?: boolean
}

export interface PageMenuButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  icon?: Function
  showOnMobile?: boolean
}

const PageMenuLink = forwardRef(
  ({ children, icon, showOnMobile, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <li className={clsx('amsterdam-page-menu__item', showOnMobile && 'amsterdam-page-menu__link--mobile')}>
        <a {...restProps} ref={ref} className="amsterdam-page-menu__link">
          {children}
          {icon && <Icon svg={icon} size="level-7" />}
        </a>
      </li>
    )
  },
)

const PageMenuButton = forwardRef(
  ({ children, icon, showOnMobile, ...restProps }: PageMenuButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <li className={clsx('amsterdam-page-menu__item', showOnMobile && 'amsterdam-page-menu__link--mobile')}>
        <button {...restProps} type="button" ref={ref} className="amsterdam-page-menu__button">
          {children}
          {icon && <Icon svg={icon} size="level-7" />}
        </button>
      </li>
    )
  },
)

PageMenu.displayName = 'PageMenu'
PageMenuLink.displayName = 'PageMenu.Link'
PageMenuButton.displayName = 'PageMenu.Button'
PageMenu.Link = PageMenuLink
PageMenu.Button = PageMenuButton
