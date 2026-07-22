/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { UserAccountIcon } from '@amsterdam/design-system-react-icons'

import { MenuWithItems } from './MenuWithItems'

type PageLayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const PageLayout = ({ children }: PageLayoutProps) => (
  <Page withMenu>
    <SkipLink className="ams-page__area--skip-link" href="#inhoud">
      Direct naar inhoud
    </SkipLink>
    <PageHeader
      className="ams-page__area--header"
      logoLink="/"
      logoLinkTitle="Naar de homepage van Applicatie"
      menuItems={
        <PageHeader.MenuLink fixed href="#" icon={UserAccountIcon}>
          Inloggen
        </PageHeader.MenuLink>
      }
      navigationLabel="Menu"
      noMenuButtonOnWideWindow
    >
      <MenuWithItems />
    </PageHeader>
    <MenuWithItems className="ams-page__area--menu" inWideWindow />
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
