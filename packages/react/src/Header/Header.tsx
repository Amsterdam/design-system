/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { HeaderMenuIcon } from './HeaderMenuIcon'
import { HeaderMenuLink } from './HeaderMenuLink'
import useMediaQuery from '../common/useMediaQuery'

export type HeaderProps = {
  /** Whether the menu button is always shown. By default, it only shows on narrow screens. */
  alwaysShowMenuButton?: boolean
  /** The name of the application. */
  appName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** A slot for the menu. Use Header.MenuLink here. */
  menu?: ReactNode
  /** The text for the menu button. */
  menuButtonText?: string
  /** The accessible label for the navigation section. */
  navigationLabel?: string
} & HTMLAttributes<HTMLElement>

const HeaderRoot = forwardRef(
  (
    {
      alwaysShowMenuButton,
      appName,
      className,
      children,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menu,
      menuButtonText = 'Menu',
      navigationLabel = 'Hoofdnavigatie',
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const isWideScreen = useMediaQuery('wide')

    useEffect(() => {
      // Close the menu when the menu button disappears
      if (!alwaysShowMenuButton && isWideScreen) {
        setOpen(false)
      }
    }, [isWideScreen])

    return (
      <header {...restProps} ref={ref} className={clsx('ams-header', className)}>
        <div className="ams-header__brand-section">
          <a className="ams-header__logo-link" href={logoLink}>
            <span className="ams-visually-hidden">{logoLinkTitle}</span>
            <Logo brand={logoBrand} />
          </a>
          {appName && (
            <Heading level={1} size="level-5">
              {appName}
            </Heading>
          )}
        </div>
        <nav className="ams-header__navigation" aria-labelledby="primary-navigation">
          <h2 id="primary-navigation" className="ams-visually-hidden">
            {navigationLabel}
          </h2>

          {/* The logo and app name section is recreated here, to make sure the page menu breaks at the right spot */}
          <div className="ams-header__brand-section" aria-hidden style={{ opacity: 0 }}>
            <div className="ams-header__logo-link">
              <Logo brand={logoBrand} />
            </div>
            {appName && <span className="ams-heading ams-heading--level-5">{appName}</span>}
          </div>

          <ul className="ams-header__menu">
            {menu}
            <li
              className={clsx(
                'ams-header__mega-menu-button-item',
                alwaysShowMenuButton && 'ams-header__mega-menu-button-item--always-show',
              )}
            >
              <button
                {...restProps}
                aria-controls="ams-mega-menu"
                aria-expanded={open}
                className="ams-header__mega-menu-button"
                onClick={() => setOpen(!open)}
                type="button"
              >
                <span
                  className={clsx(
                    'ams-header__mega-menu-button-label',
                    open && 'ams-header__mega-menu-button-label--open',
                  )}
                >
                  {menuButtonText}
                </span>
                <span aria-hidden="true" className="ams-header__mega-menu-button-hidden-label">
                  {menuButtonText}
                </span>
                <Icon
                  svg={
                    <HeaderMenuIcon className={clsx('ams-header__menu-icon', open && 'ams-header__menu-icon--open')} />
                  }
                  size="level-6"
                />
              </button>
            </li>
          </ul>

          <Grid
            className={clsx('ams-header__mega-menu', !open && 'ams-header__mega-menu--closed')}
            id="ams-mega-menu"
            paddingBottom="large"
          >
            {children}
          </Grid>
        </nav>
      </header>
    )
  },
)

HeaderRoot.displayName = 'Header'

export const Header = Object.assign(HeaderRoot, { MenuLink: HeaderMenuLink })
