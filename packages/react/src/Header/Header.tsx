/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { VisuallyHidden } from '../VisuallyHidden'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  title?: string
  menu?: ReactNode
}

const SubsiteTitle = ({ children }: { children: ReactNode }) => (
  <Heading level={1} size="level-3" className="amsterdam-header__subsite-title">
    {children}
  </Heading>
)

export const Header = forwardRef(
  (
    {
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      title,
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <>
        <header
          {...restProps}
          ref={ref}
          className={clsx(
            'amsterdam-header',
            menu && 'amsterdam-header--has-menu',
            title && 'amsterdam-header--has-title',
            className,
          )}
        >
          <div className="amsterdam-header__column amsterdam-header__column--logo">
            <a href={logoLink} className="amsterdam-header__logo-link">
              <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
              <Logo brand={logoBrand} />
            </a>
          </div>
          {menu && <div className="amsterdam-header__column amsterdam-header__column--menu">{menu}</div>}
          {title && (
            <div className="amsterdam-header__column--title">
              <SubsiteTitle>{title}</SubsiteTitle>
            </div>
          )}
        </header>
      </>
    )
  },
)

Header.displayName = 'Header'
SubsiteTitle.displayName = 'Header.SubsiteTitle'
