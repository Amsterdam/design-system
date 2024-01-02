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
                  <button className="amsterdam-header__menu-button" onClick={toggleMegaMenu}>
                    Menu
                  </button>
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
