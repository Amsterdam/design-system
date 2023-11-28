/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Logo, LogoBrand } from '../Logo'
import { VisuallyHidden } from '../VisuallyHidden'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink: string
  logoLinkTitle?: string
  title?: string
  menu?: ReactNode
}

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
  ) => (
    <header
      {...restProps}
      ref={ref}
      className={clsx(
        'amsterdam-header',
        title && 'amsterdam-header--has-title',
        menu && 'amsterdam-header--has-menu',
        className,
      )}
    >
      <Grid>
        <div className="amsterdam-header__column amsterdam-header__column--logo">
          <a href={logoLink} className="amsterdam-header__logo-link">
            <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
            <Logo brand={logoBrand} />
          </a>
        </div>
        {title && (
          <div className="amsterdam-header__column amsterdam-header__column--title">
            <Heading level={3} size="level-3">
              {title}
            </Heading>
          </div>
        )}
        {menu && <div className="amsterdam-header__column amsterdam-header__column--menu">{menu}</div>}
      </Grid>
    </header>
  ),
)

Header.displayName = 'Header'
