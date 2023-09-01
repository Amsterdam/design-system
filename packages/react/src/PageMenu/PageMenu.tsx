/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import React, { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

interface PageMenuComponent
  extends React.ForwardRefExoticComponent<
    PropsWithChildren<HTMLAttributes<HTMLElement>> & React.RefAttributes<HTMLElement>
  > {
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

export interface PageMenuLinkProps extends PropsWithChildren<HTMLAttributes<HTMLLIElement>> {
  href?: string
}

const PageMenuLink = forwardRef(
  ({ children, href, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLLIElement>) => {
    return (
      <li {...restProps} className="amsterdam-page-menu__link" ref={ref}>
        <a href={href}>{children}</a>
      </li>
    )
  },
)

const PageMenuButton = forwardRef(({ children, ...restProps }: PageMenuLinkProps, ref: ForwardedRef<HTMLLIElement>) => {
  return (
    <li {...restProps} className="amsterdam-page-menu__button" ref={ref}>
      <button>{children}</button>
    </li>
  )
})

PageMenu.displayName = 'PageMenu'
PageMenuLink.displayName = 'PageMenuLink'
PageMenuButton.displayName = 'PageMenuButton'
PageMenu.Link = PageMenuLink
PageMenu.Button = PageMenuButton
