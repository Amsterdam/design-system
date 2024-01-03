/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { MegaMenu } from '../MegaMenu'
import { VisuallyHidden } from '../VisuallyHidden'

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  logoBrand?: LogoBrand
  logoLink?: string
  logoLinkTitle?: string
  title?: string
  links?: ReactNode
  menu?: ReactNode
}

interface HeaderMenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean
}

const HeaderMenuButton = forwardRef(
  ({ className, onClick, isOpen, ...restProps }: HeaderMenuButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
    <button
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-header__menu-button', isOpen && 'amsterdam-header__menu-button--open', className)}
      aria-label="Open Menu"
      aria-expanded="false"
      onClick={onClick}
    >
      Menu
      <svg viewBox="0 0 19 19" role="presentation" focusable="false">
        <line x1="0" x2="100%" y1="14%" y2="14%" />
        <line x1="0" x2="100%" y1="50%" y2="50%" />
        <line x1="0" x2="100%" y1="86%" y2="86%" />
      </svg>
    </button>
  ),
)

export const Header = forwardRef(
  (
    {
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      title,
      links,
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

    const toggleMegaMenu = () => {
      setIsMegaMenuOpen(!isMegaMenuOpen)
    }

    return (
      <header {...restProps} ref={ref} className={clsx('amsterdam-header', className)}>
        <Grid>
          <Grid.Cell span="all">
            <div className="amsterdam-header__container">
              <a href={logoLink} className="amsterdam-header__logo">
                <VisuallyHidden>{logoLinkTitle}</VisuallyHidden>
                <Logo brand={logoBrand} />
              </a>
              {links && <div className="amsterdam-header__links">{links}</div>}
              {menu && (
                <div className="amsterdam-header__menu">
                  <HeaderMenuButton onClick={toggleMegaMenu} isOpen={isMegaMenuOpen} />
                </div>
              )}
              {title && (
                <div className="amsterdam-header__title">
                  <Heading level={1} size="level-3" className="amsterdam-header__title-heading">
                    {title}
                  </Heading>
                </div>
              )}
            </div>
          </Grid.Cell>
        </Grid>
        {menu && <MegaMenu isOpen={isMegaMenuOpen}>{menu}</MegaMenu>}
      </header>
    )
  },
)

Header.displayName = 'Header'
HeaderMenuButton.displayName = 'HeaderMenuButton'
