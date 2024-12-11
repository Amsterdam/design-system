/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { HeaderMenuIcon } from './HeaderMenuIcon'
import { HeaderMenuLink } from './HeaderMenuLink'
import { HeaderNarrowScreenOnlyGridCell } from './HeaderNarrowScreenOnlyGridCell'
import useMediaQuery from '../common/useMediaQuery'

export type HeaderProps = {
  /** The name of the application. */
  appName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** A slot for the menu items. Use Header.MenuLink here. */
  menuItems?: ReactNode
  /** The text for the menu button. */
  menuButtonText?: string
  /** The accessible label for the navigation section. */
  navigationLabel?: string
  /** Whether the menu button is visible on wide screens.  */
  noMenuButtonOnWideScreen?: boolean
} & HTMLAttributes<HTMLElement>

const HeaderRoot = forwardRef(
  (
    {
      appName,
      className,
      children,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menuItems,
      menuButtonText = 'Menu',
      navigationLabel = 'Hoofdnavigatie',
      noMenuButtonOnWideScreen,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const isWideScreen = useMediaQuery('wide')

    useEffect(() => {
      // Close the menu when the menu button disappears
      if (noMenuButtonOnWideScreen && isWideScreen) {
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
            <Heading level={1} size="level-5" className="ams-header__app-name">
              {appName}
            </Heading>
          )}
        </div>
        {(children || menuItems) && (
          <nav className="ams-header__navigation" aria-labelledby="primary-navigation">
            <h2 id="primary-navigation" className="ams-visually-hidden">
              {navigationLabel}
            </h2>

            {/* The logo and app name section is recreated here, to make sure the page menu breaks at the right spot */}
            <div className="ams-header__brand-section ams-header__brand-section--hidden" aria-hidden>
              <div className="ams-header__logo-link">
                <Logo brand={logoBrand} />
              </div>
              {appName && <span className="ams-heading ams-heading--level-5 ams-header__app-name">{appName}</span>}
            </div>

            <ul className="ams-header__menu">
              {menuItems}
              <li
                className={clsx(noMenuButtonOnWideScreen && 'ams-header__mega-menu-button-item--hide-on-wide-screen')}
              >
                <button
                  {...restProps}
                  aria-controls="ams-mega-menu"
                  aria-expanded={open}
                  className="ams-header__mega-menu-button"
                  onClick={() => setOpen(!open)}
                  type="button"
                >
                  <span className="ams-header__mega-menu-button-label">{menuButtonText}</span>
                  <span aria-hidden="true" className="ams-header__mega-menu-button-hidden-label">
                    {menuButtonText}
                  </span>
                  <Icon
                    svg={
                      <HeaderMenuIcon
                        className={clsx('ams-header__menu-icon', open && 'ams-header__menu-icon--open')}
                      />
                    }
                    size="level-6"
                  />
                </button>
              </li>
            </ul>

            {children && (
              <div
                className={clsx('ams-header__mega-menu', !open && 'ams-header__mega-menu--closed')}
                id="ams-mega-menu"
              >
                {children}
              </div>
            )}
          </nav>
        )}
      </header>
    )
  },
)

HeaderRoot.displayName = 'Header'

export const Header = Object.assign(HeaderRoot, {
  MenuLink: HeaderMenuLink,
  NarrowScreenOnlyGridCell: HeaderNarrowScreenOnlyGridCell,
})
