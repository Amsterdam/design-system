/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Heading, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'
import { LogOutIcon } from '@amsterdam/design-system-react-icons'

import { MenuWithItems } from './MenuWithItems'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink className="ams-page__area--skip-link" href="#inhoud">
      Direct naar inhoud
    </SkipLink>
    <PageHeader
      brandName="ChatAmsterdam"
      className="ams-page__area--header"
      logoLink="/"
      logoLinkTitle="Naar de homepage van ChatAmsterdam"
      menuItems={
        <PageHeader.MenuLink fixed href="#" icon={LogOutIcon} key="logOut">
          Uitloggen
        </PageHeader.MenuLink>
      }
      noMenuButtonOnWideWindow
    >
      <MenuWithItems />
    </PageHeader>
    <MenuWithItems className="ams-page__area--menu" inWideWindow />
    <main className="ams-page__area--body" id="inhoud" style={{ display: 'flex' }}>
      {children}
    </main>
    <PageFooter
      className="ams-page__area--footer"
      style={{ borderBlockStart: 'var(--ams-border-width-l) solid var(--ams-color-interactive)' }}
    >
      <Heading className="ams-visually-hidden" level={2}>
        Over deze website
      </Heading>
      <PageFooter.Menu style={{ paddingBlock: 'var(--ams-space-s)' }}>
        <PageFooter.MenuLink href="#">E-learning</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacyverklaring</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Gebruikersvoorwaarden</PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  </>
)
