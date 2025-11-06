/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Grid, Heading, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'

import { MenuWithItems } from './MenuWithItems'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink className="ams-page__area--skip-link" href="#inhoud">
      Direct naar inhoud
    </SkipLink>
    <PageHeader
      className="ams-page__area--header"
      logoLink="/"
      logoLinkTitle="Naar de homepage van Applicatie"
      noMenuButtonOnWideWindow
    >
      <Grid>
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <MenuWithItems />
        </PageHeader.GridCellNarrowWindowOnly>
      </Grid>
    </PageHeader>
    <MenuWithItems className="ams-page__area--menu" inWideWindow />
    <main className="ams-page__area--body" id="inhoud">
      {children}
    </main>
    <PageFooter className="ams-page__area--footer">
      <Heading className="ams-visually-hidden" level={2}>
        Over deze website
      </Heading>
      <PageFooter.Menu>
        <PageFooter.MenuLink href="#">E-mail je vraag of feedback</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Bekijk help en uitleg</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Overzicht releases</PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  </>
)
