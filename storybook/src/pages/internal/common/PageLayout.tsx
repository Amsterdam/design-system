/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { UserAccountIcon } from '@amsterdam/design-system-react-icons'
import { SaintAndrewsCrossesIcon } from '@amsterdam/design-system-react-icons/src'
import { Icon } from '@amsterdam/design-system-react/src'
import useViewportHasMinWidth from '@amsterdam/design-system-react/src/common/useViewportHasMinWidth'
import clsx from 'clsx'
import { useState } from 'react'

import { MenuWithItems } from './MenuWithItems'

type PageLayoutProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const PageLayout = ({ children, ...restProps }: PageLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isWideWindow = useViewportHasMinWidth('wide')
  const isMenuVisible = isOpen || isWideWindow

  const handleMenuButtonClick = () => {
    setIsOpen((open) => !open)
  }

  return (
    // withMenu lays the Page out as a grid with a column for the Menu beside the header, the body and the footer.
    // The rules for those areas select direct children of the Page only, so each child below needs its own
    // ams-page__area class and none of them may be wrapped in another element.
    <Page {...restProps} withMenu>
      {/* Targets the id on the main element below, so the next Tab press continues past the header and the menu. */}
      <SkipLink className="ams-page__area--skip-link" href="#inhoud">
        Direct naar inhoud
      </SkipLink>
      <PageHeader
        // An internal application is not the City’s main website, so the header names it beside the logo.
        // That name also completes the hidden text of the logo link: ‘Ga naar de homepage van …’.
        brandName="Naam van de applicatie"
        // Below the wide breakpoint the short form replaces the full name.
        brandNameShort="NvdA"
        className="ams-page__area--header"
        menuItems={
          <>
            <PageHeader.MenuLink fixed href="#" icon={UserAccountIcon}>
              Inloggen
            </PageHeader.MenuLink>
            <span className="ams-page-header__mega-menu-button-item--hide-on-wide-window">
              <button
                aria-controls="navmenu"
                aria-expanded={isMenuVisible}
                className="ams-page-header__mega-menu-button"
                onClick={handleMenuButtonClick}
                type="button"
              >
                <span aria-hidden="true" className="ams-page-header__mega-menu-button-label">
                  Menu
                </span>
                <span className="ams-visually-hidden">
                  {isMenuVisible ? 'Verberg navigatiemenu' : 'Laat navigatiemenu zien'}
                </span>
                <Icon svg={SaintAndrewsCrossesIcon} />
              </button>
            </span>
          </>
        }
        // This navigation and the Menu below both default to the accessible name ‘Hoofdmenu’, and a wide window
        // shows both of them. Give one of the two another name.
        navigationLabel="Menu"
        // On a wide window the Menu in this header hides itself, so the button would open an empty menu there.
        noMenuButtonOnWideWindow
      >
        {/* The Menu for narrow and medium windows, inside the collapsible menu of the Page Header. */}
        {/*<MenuWithItems />*/}
      </PageHeader>
      {/* The same Menu for wide windows, in the menu column of the Page. inWideWindow shows one of the two. */}
      <MenuWithItems className={clsx('ams-page__area--menu', isOpen && 'ams-menu--open')} id="navmenu" inWideWindow />
      {/* The main element lives here rather than in the templates: an area class only works on a direct child. */}
      <main className="ams-page__area--body" id="inhoud">
        {children}
      </main>
      <PageFooter className="ams-page__area--footer">
        <PageFooter.Menu>
          <PageFooter.MenuLink href="#">E-mail je vraag of feedback</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Bekijk help en uitleg</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Overzicht releases</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </Page>
  )
}
