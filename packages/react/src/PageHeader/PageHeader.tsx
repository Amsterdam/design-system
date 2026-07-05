/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnchorHTMLAttributes, ElementType, ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useId, useRef, useState } from 'react'

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
  /**
   * Whether the mega menu is open initially.
   * Ignored when `open` is provided.
   * @default false
   */
  readonly defaultOpen?: boolean
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
  /** Callback fired when the mega menu is opened or closed. Receives the new open state. */
  readonly onOpenChange?: (open: boolean) => void
  /**
   * Whether the mega menu is open.
   * When provided, the component is controlled and internal state is ignored.
   */
  readonly open?: boolean
} & Readonly<HTMLAttributes<HTMLElement>>

const PageHeaderRoot = forwardRef(
  (
    {
      brandName,
      brandNameShort,
      children,
      className,
      defaultOpen,
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
      onOpenChange,
      open,
      ...restProps
    }: PageHeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const isControlled = open !== undefined
    const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false)
    const isOpen = isControlled ? open : internalOpen

    const viewportHasMinWidth = useViewportHasMinWidth('wide')
    const accessibleLabelId = useId()
    const megaMenuId = useId()
    const hasMegaMenu = Boolean(children)
    const hasMegaMenuOnWideWindow = hasMegaMenu && viewportHasMinWidth
    const menuButtonHidden = noMenuButtonOnWideWindow && hasMegaMenuOnWideWindow

    // Warn once when the component flips between controlled and uncontrolled, mirroring React’s guardrail for inputs.
    const wasControlledRef = useRef(isControlled)
    useEffect(() => {
      if (wasControlledRef.current !== isControlled) {
        console.warn(
          `PageHeader is changing from ${
            wasControlledRef.current ? 'controlled to uncontrolled' : 'uncontrolled to controlled'
          }. Decide for its lifetime: pass \`open\` for controlled, or leave it undefined for uncontrolled.`,
        )
        wasControlledRef.current = isControlled
      }
    }, [isControlled])

    // Close the menu when its button hides on a wide window, and keep it closed when the button returns: there is then
    // no control to reopen it. Adjusting state while rendering is the recommended pattern for this internal reset.
    const [menuButtonWasHidden, setMenuButtonWasHidden] = useState(menuButtonHidden)
    if (menuButtonHidden !== menuButtonWasHidden) {
      setMenuButtonWasHidden(menuButtonHidden)
      if (menuButtonHidden && isOpen && !isControlled) {
        setInternalOpen(false)
      }
    }

    // Notify a listening parent when hiding the button force-closes the menu. This runs in an effect so it never
    // updates a controlled parent during render; the refs capture the hide transition and the prior open state.
    const wasMenuButtonHiddenRef = useRef(menuButtonHidden)
    const wasOpenRef = useRef(isOpen)
    useEffect(() => {
      if (!wasMenuButtonHiddenRef.current && menuButtonHidden && wasOpenRef.current) {
        onOpenChange?.(false)
      }
      wasMenuButtonHiddenRef.current = menuButtonHidden
      wasOpenRef.current = isOpen
    }, [isOpen, menuButtonHidden, onOpenChange])

    const handleMenuButtonClick = () => {
      const nextOpen = !isOpen
      if (!isControlled) setInternalOpen(nextOpen)
      onOpenChange?.(nextOpen)
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
                    aria-controls={megaMenuId}
                    aria-expanded={isOpen}
                    className="ams-page-header__mega-menu-button"
                    onClick={handleMenuButtonClick}
                    type="button"
                  >
                    <span aria-hidden="true" className="ams-page-header__mega-menu-button-label">
                      {menuButtonText}
                    </span>
                    <span className="ams-visually-hidden">
                      {isOpen ? menuButtonTextForHide : menuButtonTextForShow}
                    </span>
                    <Icon
                      svg={
                        menuButtonIcon ?? (
                          <PageHeaderMenuIcon
                            className={clsx('ams-page-header__menu-icon', isOpen && 'ams-page-header__menu-icon--open')}
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
                className={clsx('ams-page-header__mega-menu', !isOpen && 'ams-page-header__mega-menu--closed')}
                id={megaMenuId}
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
