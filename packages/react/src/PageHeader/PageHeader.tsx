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
import { PageHeaderGridCellNarrowWindowOnly } from './PageHeaderGridCellNarrowWindowOnly'
import { PageHeaderMenuIcon } from './PageHeaderMenuIcon'
import { PageHeaderMenuLink } from './PageHeaderMenuLink'
import useIsAfterBreakpoint from '../common/useIsAfterBreakpoint'

const LogoLinkContent = ({ brandName, logoBrand }: { brandName?: string; logoBrand: LogoBrand }) => (
  <>
    <span className={clsx(logoBrand === 'amsterdam' && Boolean(brandName) && 'ams-page-header__logo-container')}>
      <Logo brand={logoBrand} />
    </span>
    {brandName && (
      <span aria-hidden="true" className="ams-page-header__brand-name">
        {brandName}
      </span>
    )}
  </>
)

export type PageHeaderProps = {
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
  /** A slot for the menu items. Use PageHeader.MenuLink here. */
  menuItems?: ReactNode
  /** The accessible label for the navigation section. */
  navigationLabel?: string
  /** Whether the menu button is visible on wide screens.  */
  noMenuButtonOnWideWindow?: boolean
} & HTMLAttributes<HTMLElement>

const PageHeaderRoot = forwardRef(
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
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const hasMegaMenu = Boolean(children)
    const isWideWindow = hasMegaMenu && useIsAfterBreakpoint('wide')

    useEffect(() => {
      // Close the menu when the menu button disappears
      if (noMenuButtonOnWideWindow && isWideWindow) {
        setOpen(false)
      }
    }, [isWideWindow])

    return (
      <header {...restProps} className={clsx('ams-page-header', className)} ref={ref}>
        <a className="ams-page-header__logo-link" href={logoLink}>
          <span className="ams-visually-hidden">{logoLinkTitle}</span>
          <LogoLinkContent brandName={brandName} logoBrand={logoBrand} />
        </a>
        {(hasMegaMenu || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-page-header__navigation">
            <h2 className="ams-visually-hidden" id="primary-navigation">
              {navigationLabel}
            </h2>

            {/* The logo link section is recreated here, to make sure the header menu wraps at the right spot */}
            <div className="ams-page-header__logo-link ams-page-header__logo-link--hidden">
              <LogoLinkContent brandName={brandName} logoBrand={logoBrand} />
            </div>

            <ul className="ams-page-header__menu">
              {menuItems}
              {hasMegaMenu && (
                <li
                  className={clsx(
                    noMenuButtonOnWideWindow && 'ams-page-header__mega-menu-button-item--hide-on-wide-window',
                  )}
                >
                  <button
                    {...restProps}
                    aria-controls="ams-mega-menu"
                    aria-expanded={open}
                    className="ams-page-header__mega-menu-button"
                    onClick={() => setOpen(!open)}
                    type="button"
                  >
                    <span className="ams-page-header__mega-menu-button-label">{menuButtonText}</span>
                    <span aria-hidden="true" className="ams-page-header__mega-menu-button-hidden-label">
                      {menuButtonText}
                    </span>
                    <Icon
                      svg={
                        <PageHeaderMenuIcon
                          className={clsx('ams-page-header__menu-icon', open && 'ams-page-header__menu-icon--open')}
                        />
                      }
                    />
                  </button>
                </li>
              )}
            </ul>

            {hasMegaMenu && (
              <div
                className={clsx('ams-page-header__mega-menu', !open && 'ams-page-header__mega-menu--closed')}
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

PageHeaderRoot.displayName = 'PageHeader'

export const PageHeader = Object.assign(PageHeaderRoot, {
  GridCellNarrowWindowOnly: PageHeaderGridCellNarrowWindowOnly,
  MenuLink: PageHeaderMenuLink,
})
