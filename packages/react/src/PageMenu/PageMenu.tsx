/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

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

interface PageMenuComponent
  extends ForwardRefExoticComponent<PropsWithChildren<HTMLAttributes<HTMLElement>> & RefAttributes<HTMLElement>> {
  Link: typeof PageMenuLink
  Button: typeof PageMenuButton
}

export const PageMenu = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>, ref: ForwardedRef<HTMLElement>) => {
    return (
      <nav {...restProps} className="amsterdam-page-menu" ref={ref}>
        <ul className="amsterdam-page-menu__list">{children}</ul>
      </nav>
    )
  },
) as PageMenuComponent

export interface PageMenuLinkProps extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  icon?: Function
}

export interface PageMenuButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  icon?: Function
}

const PageMenuLink = forwardRef(
  ({ children, icon, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <li className="amsterdam-page-menu__item">
        <a {...restProps} ref={ref} className="amsterdam-page-menu__link">
          {children}
          {icon && <Icon svg={icon} size="level-7" />}
        </a>
      </li>
    )
  },
)

const PageMenuButton = forwardRef(
  ({ children, icon, ...restProps }: PageMenuButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <li className="amsterdam-page-menu__item">
        <button {...restProps} type="button" ref={ref} className="amsterdam-page-menu__button">
          {children}
          {icon && <Icon svg={icon} size="level-7" />}
        </button>
      </li>
    )
  },
)

PageMenu.displayName = 'PageMenu'
PageMenuLink.displayName = 'PageMenuLink'
PageMenuButton.displayName = 'PageMenuButton'
PageMenu.Link = PageMenuLink
PageMenu.Button = PageMenuButton
