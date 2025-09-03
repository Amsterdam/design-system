/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'
import { forwardRef, useEffect, useState } from 'react'

import type { LogoBrand } from '../Logo'

import useIsAfterBreakpoint from '../common/useIsAfterBreakpoint'
import { Icon } from '../Icon'
import { Logo } from '../Logo'
import { PageHeaderGridCellNarrowWindowOnly } from './PageHeaderGridCellNarrowWindowOnly'
import { PageHeaderMenuIcon } from './PageHeaderMenuIcon'
import { PageHeaderMenuLink } from './PageHeaderMenuLink'

const LogoLinkContent = ({
  brandName,
  logoAccessibleName,
  logoBrand,
}: {
  brandName?: string
  logoAccessibleName?: string
  logoBrand: LogoBrand
}) => (
  <>
    <span className={clsx(logoBrand === 'amsterdam' && Boolean(brandName) && 'ams-page-header__logo-container')}>
      <Logo aria-label={logoAccessibleName} brand={logoBrand} />
    </span>
    {brandName && (
      <span aria-hidden="true" className="ams-page-header__brand-name">
        {brandName}
      </span>
    )}
  </>
)

export type PageHeaderProps = HTMLAttributes<HTMLElement> & {
  /** The name of the application. */
  brandName?: string
  /** The accessible name of the logo. */
  logoAccessibleName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The React component to use for the logo link. */
  logoLinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
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
}

const PageHeaderRoot = forwardRef(
  (
    {
      brandName,
      children,
      className,
      logoAccessibleName,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
      logoLinkTitle = `Ga naar de homepage${brandName ? ` van ${brandName}` : ''}`,
      menuButtonText = 'Menu',
      menuItems,
      navigationLabel = 'Hoofdnavigatie',
      noMenuButtonOnWideWindow,
      ...restProps
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const Link = logoLinkComponent
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
        <Link className="ams-page-header__logo-link" href={logoLink}>
          <LogoLinkContent brandName={brandName} logoAccessibleName={logoAccessibleName} logoBrand={logoBrand} />
          <span className="ams-visually-hidden">{` ${logoLinkTitle}`}</span>
        </Link>
        {(hasMegaMenu || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-page-header__navigation">
            <h2 aria-hidden className="ams-visually-hidden" id="primary-navigation">
              {navigationLabel}
            </h2>

            {/* The logo link section is recreated here, to make sure the header menu wraps at the right spot */}
            <div aria-hidden className="ams-page-header__logo-link ams-page-header__logo-link--hidden" hidden>
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
                    aria-controls="ams-page-header-mega-menu"
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
                id="ams-page-header-mega-menu"
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

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs Page Header docs at Amsterdam Design System}
 */
export const PageHeader = Object.assign(PageHeaderRoot, {
  GridCellNarrowWindowOnly: PageHeaderGridCellNarrowWindowOnly,
  MenuLink: PageHeaderMenuLink,
})
