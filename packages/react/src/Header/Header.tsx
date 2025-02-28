/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useEffect, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Icon } from '../Icon'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { HeaderGridCellNarrowWindowOnly } from './HeaderGridCellNarrowWindowOnly'
import { HeaderMenuIcon } from './HeaderMenuIcon'
import { HeaderMenuLink } from './HeaderMenuLink'
import useIsAfterBreakpoint from '../common/useIsAfterBreakpoint'

const LogoLinkContent = ({ brandName, logoBrand }: { brandName?: string; logoBrand: LogoBrand }) => (
  <>
    <span className={clsx(logoBrand === 'amsterdam' && Boolean(brandName) && 'ams-header__logo-container')}>
      <Logo brand={logoBrand} />
    </span>
    {brandName && (
      <span aria-hidden="true" className="ams-header__brand-name">
        {brandName}
      </span>
    )}
  </>
)

export type HeaderProps = {
  /** The name of the application. */
  brandName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: Exclude<LogoBrand, 'amsterdam-emblem-only'>
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
      <header {...restProps} className={clsx('ams-header', className)} ref={ref}>
        <a className="ams-header__logo-link" href={logoLink}>
          <span className="ams-visually-hidden">{logoLinkTitle}</span>
          <LogoLinkContent brandName={brandName} logoBrand={logoBrand} />
        </a>
        {(children || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-header__navigation">
            <h2 className="ams-visually-hidden" id="primary-navigation">
              {navigationLabel}
            </h2>

            {/* The branding section is recreated here, to make sure the page menu breaks at the right spot */}
            <div className="ams-header__logo-link ams-header__logo-link--hidden">
              <LogoLinkContent brandName={brandName} logoBrand={logoBrand} />
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
                    onClick={() => setOpen(!open)}
                    type="button"
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
  GridCellNarrowWindowOnly: HeaderGridCellNarrowWindowOnly,
  MenuLink: HeaderMenuLink,
})
