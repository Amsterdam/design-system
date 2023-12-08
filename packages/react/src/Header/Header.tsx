/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { VisuallyHidden } from '../VisuallyHidden'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  menu?: ReactNode
}

export const Header = forwardRef(
  (
    {
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <header
        {...restProps}
        ref={ref}
        className={clsx('amsterdam-header', menu && 'amsterdam-header--has-menu', className)}
      >
        <div className="amsterdam-header__column amsterdam-header__column--logo">
          <a href={logoLink} className="amsterdam-header__logo-link">
            <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
            <Logo brand={logoBrand} />
          </a>
        </div>
        {menu && <div className="amsterdam-header__column amsterdam-header__column--menu">{menu}</div>}
      </header>
    )
  },
)

Header.displayName = 'Header'
