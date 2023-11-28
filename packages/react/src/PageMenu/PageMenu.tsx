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

type PageMenuProps = {
  /**
   * Whether the page menu’s items align to its end.
   * If the menu itself aligns to the end of its container, you should set this to `true`.
   */
  alignEnd?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLUListElement>>

interface PageMenuComponent extends ForwardRefExoticComponent<PageMenuProps & RefAttributes<HTMLElement>> {
  Link: typeof PageMenuLink
  Button: typeof PageMenuButton
}

export const PageMenu = forwardRef(
  ({ alignEnd, children, className, ...restProps }: PageMenuProps, ref: ForwardedRef<HTMLUListElement>) => {
    return (
      <ul
        {...restProps}
        className={clsx('amsterdam-page-menu', alignEnd && `amsterdam-page-menu--align-end`, className)}
        ref={ref}
      >
        {children}
      </ul>
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
PageMenuLink.displayName = 'PageMenu.Link'
PageMenuButton.displayName = 'PageMenu.Button'
PageMenu.Link = PageMenuLink
PageMenu.Button = PageMenuButton
