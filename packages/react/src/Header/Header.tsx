/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Logo, LogoBrand } from '../Logo'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  title?: string
  menu?: ReactNode
}

export const Header = forwardRef(
  (
    { className, logoBrand, logoLink, logoLinkTitle, title, menu, ...restProps }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <header
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-header',
        // title !== null && 'amsterdam-header--has-title',
        // menu && 'amsterdam-header--has-menu',
        className,
      )}
    >
      <div className="amsterdam-header__column">
        {logoLink ? (
          <a href={logoLink} title={logoLinkTitle} className="amsterdam-header__logo-link">
            <Logo brand={logoBrand} />
          </a>
        ) : (
          <Logo brand={logoBrand} />
        )}
      </div>
      {title && (
        <div className="amsterdam-header__column">
          <Heading level={3} size="level-3">
            {title}
          </Heading>
        </div>
      )}
      {menu && <div className="amsterdam-header__column">{menu}</div>}
    </header>
  ),
)

Header.displayName = 'Header'
