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
import { HeaderGridCellNarrowWindowOnly } from './HeaderGridCellNarrowWindowOnly'
import { HeaderMenuIcon } from './HeaderMenuIcon'
import { HeaderMenuLink } from './HeaderMenuLink'
import useIsAfterBreakpoint from '../common/useIsAfterBreakpoint'

export type HeaderProps = {
  /** The name of the application. */
  brandName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** The text for the menu button. */
  menuButtonText?: string
  /** A slot for the menu items. Use Header.MenuLink here. */
  menuItems?: ReactNode
  /** The accessible label for the navigation section. */
  navigationLabel?: string
  /** Whether the menu button is visible on wide screens.  */
  noMenuButtonOnWideWindow?: boolean
} & HTMLAttributes<HTMLElement>

const HeaderRoot = forwardRef(
  (
    {
      brandName,
      children,
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menuButtonText = 'Menu',
      menuItems,
      navigationLabel = 'Hoofdnavigatie',
      noMenuButtonOnWideWindow,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const isWideWindow = useIsAfterBreakpoint('wide')

    useEffect(() => {
      // Close the menu when the menu button disappears
      if (noMenuButtonOnWideWindow && isWideWindow) {
        setOpen(false)
      }
    }, [isWideWindow])

    return (
      <header {...restProps} ref={ref} className={clsx('ams-header', className)}>
        <div className="ams-header__branding">
          <a className="ams-header__logo-link" href={logoLink}>
            <span className="ams-visually-hidden">{logoLinkTitle}</span>
            <Logo brand={logoBrand} />
          </a>
          {brandName && (
            <Heading className="ams-header__brand-name" level={1} size="level-5">
              {brandName}
            </Heading>
          )}
        </div>
        {(children || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-header__navigation">
            <h2 id="primary-navigation" className="ams-visually-hidden">
              {navigationLabel}
            </h2>

            {/* The branding section is recreated here, to make sure the page menu breaks at the right spot */}
            <div aria-hidden className="ams-header__branding ams-header__branding--hidden">
              <div className="ams-header__logo-link">
                <Logo brand={logoBrand} />
              </div>
              {brandName && (
                <span className="ams-heading ams-heading--level-5 ams-header__brand-name">{brandName}</span>
              )}
            </div>

            <ul className="ams-header__menu">
              {menuItems}
              {children && (
                <li
                  className={clsx(noMenuButtonOnWideWindow && 'ams-header__mega-menu-button-item--hide-on-wide-window')}
                >
                  <button
                    {...restProps}
                    aria-controls="ams-mega-menu"
                    aria-expanded={open}
                    className="ams-header__mega-menu-button"
                    type="button"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="ams-header__mega-menu-button-label">{menuButtonText}</span>
                    <span aria-hidden="true" className="ams-header__mega-menu-button-hidden-label">
                      {menuButtonText}
                    </span>
                    <Icon
                      size="level-5"
                      svg={
                        <HeaderMenuIcon
                          className={clsx('ams-header__menu-icon', open && 'ams-header__menu-icon--open')}
                        />
                      }
                    />
                  </button>
                </li>
              )}
            </ul>

            {children && (
              <div
                id="ams-mega-menu"
                className={clsx('ams-header__mega-menu', !open && 'ams-header__mega-menu--closed')}
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
  GridCellNarrowWindowOnly: HeaderGridCellNarrowWindowOnly,
  MenuLink: HeaderMenuLink,
})
