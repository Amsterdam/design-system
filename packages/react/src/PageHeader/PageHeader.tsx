/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useId, useState } from 'react'

import type { IconProps } from '../Icon'
import type { LogoBrand } from '../Logo'
import type { LogoBrandConfig } from '../Logo/Logo'

import useViewportHasMinWidth from '../common/useViewportHasMinWidth'
import { Icon } from '../Icon'
import { LogoLinkContent } from './LogoLinkContent'
import { PageHeaderGridCellNarrowWindowOnly } from './PageHeaderGridCellNarrowWindowOnly'
import { PageHeaderMenuIcon } from './PageHeaderMenuIcon'
import { PageHeaderMenuLink } from './PageHeaderMenuLink'

const DefaultLogoLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

export type PageHeaderProps = {
  /** The name of the application. */
  readonly brandName?: string
  /**
   * A shorter form of the name of the application.
   * Provide this only together with a `brandName`.
   */
  readonly brandNameShort?: string
  /** The accessible name of the logo. */
  readonly logoAccessibleName?: string
  /** The name of the brand for which to display the logo. */
  readonly logoBrand?: LogoBrand | LogoBrandConfig
  /** The url for the link on the logo. */
  readonly logoLink?: string
  /** The React component or intrinsic element to use for the logo link. */
  readonly logoLinkComponent?: ElementType
  /** The accessible text for the link on the logo. */
  readonly logoLinkTitle?: string
  /** An icon to display instead of the default icon. */
  readonly menuButtonIcon?: IconProps['svg']
  /** The visible text for the menu button. */
  readonly menuButtonText?: string
  /** The text for screen readers when the button hides the menu. */
  readonly menuButtonTextForHide?: string
  /** The text for screen readers when the button shows the menu. */
  readonly menuButtonTextForShow?: string
  /** A slot for the menu items. Use PageHeader.MenuLink here. */
  readonly menuItems?: ReactNode
  /**
   * The accessible label for the navigation section.
   * @default Hoofdmenu
   */
  readonly navigationLabel?: string
  /** Hides the menu button on wide windows. */
  readonly noMenuButtonOnWideWindow?: boolean
} & Readonly<HTMLAttributes<HTMLElement>>

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
      logoLinkComponent = DefaultLogoLink,
      logoLinkTitle,
      menuButtonIcon,
      menuButtonText = 'Menu',
      menuButtonTextForHide = 'Verberg navigatiemenu',
      menuButtonTextForShow = 'Laat navigatiemenu zien',
      menuItems,
      navigationLabel = 'Hoofdmenu',
      noMenuButtonOnWideWindow,
      ...restProps
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const viewportHasMinWidth = useViewportHasMinWidth('wide')
    const accessibleLabelId = useId()
    const hasMegaMenu = Boolean(children)
    const hasMegaMenuOnWideWindow = hasMegaMenu && viewportHasMinWidth
    const menuButtonHidden = noMenuButtonOnWideWindow && hasMegaMenuOnWideWindow

    // Close the menu when its button is hidden, and keep it closed when the button returns: there is then no control to reopen it.
    const [menuButtonWasHidden, setMenuButtonWasHidden] = useState(menuButtonHidden)
    if (menuButtonHidden !== menuButtonWasHidden) {
      setMenuButtonWasHidden(menuButtonHidden)
      /* v8 ignore next -- setState above causes React to discard and retry this render; v8 cannot track the false branch across the retry */
      if (menuButtonHidden) {
        setOpen(false)
      }
    }

    const LogoLink = logoLinkComponent

    // Use short brand name if no full brand name is (invalidly) provided
    const brandNameFullOrShort = brandName || brandNameShort
    const logoLinkContentProps = { brandNameFullOrShort, brandNameShort, logoAccessibleName, logoBrand }

    return (
      <header {...restProps} className={clsx('ams-page-header', className)} ref={ref}>
        <LogoLink className="ams-page-header__logo-link" href={logoLink}>
          <LogoLinkContent {...logoLinkContentProps} />
          <span className="ams-visually-hidden">
            {logoLinkTitle ?? `Ga naar de homepage${brandNameFullOrShort ? ' van ' + brandNameFullOrShort : ''}`}
          </span>
        </LogoLink>
        {(hasMegaMenu || menuItems) && (
          <nav aria-labelledby={accessibleLabelId} className="ams-page-header__navigation">
            <h2 aria-hidden className="ams-visually-hidden" id={accessibleLabelId}>
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
                    onClick={() => setOpen((wasOpen) => !wasOpen)}
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
 * Conveys the identity and authority of the website through a logo and optional navigation links.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-page-header--docs Page Header docs at Amsterdam Design System}
 */
export const PageHeader = Object.assign(PageHeaderRoot, {
  GridCellNarrowWindowOnly: PageHeaderGridCellNarrowWindowOnly,
  MenuLink: PageHeaderMenuLink,
})
