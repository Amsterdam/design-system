/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ComponentType, ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useState } from 'react'

import type { IconProps } from '../Icon'
import type { LogoBrand } from '../Logo'
import type { LogoBrandConfig } from '../Logo/Logo'

import useViewportHasMinWidth from '../common/useViewportHasMinWidth'
import { Icon } from '../Icon'
import { Logo } from '../Logo'
import { PageHeaderGridCellNarrowWindowOnly } from './PageHeaderGridCellNarrowWindowOnly'
import { PageHeaderMenuIcon } from './PageHeaderMenuIcon'
import { PageHeaderMenuLink } from './PageHeaderMenuLink'

const LogoLinkContent = ({
  brandNameFullOrShort,
  brandNameShort,
  logoAccessibleName,
  logoBrand,
}: {
  brandNameFullOrShort?: string
  brandNameShort?: string
  logoAccessibleName?: string
  logoBrand: LogoBrand | LogoBrandConfig
}) => (
  <>
    <span className={clsx(logoBrand === 'amsterdam' && brandNameFullOrShort && 'ams-page-header__logo-container')}>
      <Logo aria-label={logoAccessibleName} brand={logoBrand} />
    </span>
    {brandNameShort && (
      <span aria-hidden="true" className="ams-page-header__brand-name-short">
        {brandNameShort}
      </span>
    )}
    {brandNameFullOrShort && (
      <span aria-hidden="true" className="ams-page-header__brand-name">
        {brandNameFullOrShort}
      </span>
    )}
  </>
)

export type PageHeaderProps = {
  /** The name of the application. */
  brandName?: string
  /**
   * A shorter form of the name of the application.
   * Provide this only together with a `brandName`.
   */
  brandNameShort?: string
  /** The accessible name of the logo. */
  logoAccessibleName?: string
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand | LogoBrandConfig
  /** The url for the link on the logo. */
  logoLink?: string
  /** The React component to use for the logo link. */
  logoLinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** An icon to display instead of the default icon. */
  menuButtonIcon?: IconProps['svg']
  /** The visible text for the menu button. */
  menuButtonText?: string
  /** The text for screen readers when the button hides the menu. */
  menuButtonTextForHide?: string
  /** The text for screen readers when the button shows the menu. */
  menuButtonTextForShow?: string
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
      brandNameShort,
      children,
      className,
      logoAccessibleName,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkComponent = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
      logoLinkTitle,
      menuButtonIcon,
      menuButtonText = 'Menu',
      menuButtonTextForHide = 'Verberg navigatiemenu',
      menuButtonTextForShow = 'Laat navigatiemenu zien',
      menuItems,
      navigationLabel = 'Hoofdnavigatie',
      noMenuButtonOnWideWindow,
      ...restProps
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const viewportHasMinWidth = useViewportHasMinWidth('wide')
    const hasMegaMenu = Boolean(children)
    const hasMegaMenuOnWideWindow = hasMegaMenu && viewportHasMinWidth

    const LogoLink = logoLinkComponent

    // Foolproof fallback to the short brand name if the full brand name is not provided.
    const brandNameFullOrShort = brandName || brandNameShort
    const logoLinkContentProps = { brandNameFullOrShort, brandNameShort, logoAccessibleName, logoBrand }

    useEffect(() => {
      // Close the menu when the menu button disappears
      if (noMenuButtonOnWideWindow && hasMegaMenuOnWideWindow) {
        setOpen(false)
      }
    }, [hasMegaMenuOnWideWindow, noMenuButtonOnWideWindow])

    return (
      <header {...restProps} className={clsx('ams-page-header', className)} ref={ref}>
        <LogoLink className="ams-page-header__logo-link" href={logoLink}>
          <LogoLinkContent {...logoLinkContentProps} />
          <span className="ams-visually-hidden">
            {logoLinkTitle ?? `Ga naar de homepage${brandNameFullOrShort ? ' van ' + brandNameFullOrShort : ''}`}
          </span>
        </LogoLink>
        {(hasMegaMenu || menuItems) && (
          <nav aria-labelledby="primary-navigation" className="ams-page-header__navigation">
            <h2 aria-hidden className="ams-visually-hidden" id="primary-navigation">
              {navigationLabel}
            </h2>

            {/* The logo link section is recreated here, to make sure the header menu wraps at the right spot */}
            <div aria-hidden className="ams-page-header__logo-link ams-page-header__logo-link--hidden" hidden>
              <LogoLinkContent {...logoLinkContentProps} logoAccessibleName={undefined} />
            </div>

            <ul className="ams-page-header__menu">
              {menuItems}
              {hasMegaMenu && (
                <li
                  className={clsx(
                    'ams-page-header__mega-menu-button-item',
                    noMenuButtonOnWideWindow && 'ams-page-header__mega-menu-button-item--hide-on-wide-window',
                  )}
                  hidden // Hide the list item containing the menu button until its CSS loads. If it doesn't load, the menu will always be visible.
                >
                  <button
                    aria-controls="ams-page-header-mega-menu"
                    aria-expanded={open}
                    className="ams-page-header__mega-menu-button"
                    onClick={() => setOpen(!open)}
                    type="button"
                  >
                    <span aria-hidden="true" className="ams-page-header__mega-menu-button-label">
                      {menuButtonText}
                    </span>
                    <span className="ams-visually-hidden">{open ? menuButtonTextForHide : menuButtonTextForShow}</span>
                    <Icon
                      svg={
                        menuButtonIcon ?? (
                          <PageHeaderMenuIcon
                            className={clsx('ams-page-header__menu-icon', open && 'ams-page-header__menu-icon--open')}
                          />
                        )
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
