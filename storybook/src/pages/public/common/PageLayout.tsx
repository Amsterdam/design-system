/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import { Grid, Heading, LinkList, Page, PageFooter, PageHeader, SkipLink } from '@amsterdam/design-system-react'

import { PageFooterContent } from '../../../components/PageFooter/PageFooterContent'
import { megaMenuLinks, pageHeaderMenuLinks } from './menu'

type SkipLinkItem = {
  readonly label: string
  readonly targetId: string
}

type PageLayoutProps = PropsWithChildren<
  {
    readonly skipLinks?: ReadonlyArray<SkipLinkItem>
  } & HTMLAttributes<HTMLDivElement>
>

export const PageLayout = ({
  children,
  skipLinks = [{ label: 'Direct naar inhoud', targetId: 'inhoud' }],
  ...restProps
}: PageLayoutProps) => (
  <Page {...restProps}>
    {/*
     * The Skip Links come before the Page Header, which leaves them outside every landmark unless a nav
     * holds them. Its accessible name sets it apart from the other navigation landmarks on the page:
     * Hoofdmenu, Kruimelpad, and a Table of Contents where a page has one.
     */}
    <nav aria-label="Snelkoppelingen">
      {skipLinks.map(({ label, targetId }) => (
        <SkipLink href={`#${targetId}`} key={targetId}>
          {label}
        </SkipLink>
      ))}
    </nav>
    <PageHeader
      menuItems={pageHeaderMenuLinks.map(({ fixed, href, icon, label, lang }) => (
        <PageHeader.MenuLink
          fixed={fixed}
          href={href ?? '#'}
          icon={icon}
          key={label}
          lang={lang}
          rel={href ? 'external' : undefined}
        >
          {label}
        </PageHeader.MenuLink>
      ))}
    >
      <Grid>
        <PageHeader.GridCellNarrowWindowOnly span="all">
          <LinkList>
            {pageHeaderMenuLinks
              .filter((link) => !link.fixed)
              .map(({ href, icon, label, lang }) => (
                <LinkList.Link
                  href={href ?? '#'}
                  icon={icon}
                  key={label}
                  lang={lang}
                  rel={href ? 'external' : undefined}
                >
                  {label}
                </LinkList.Link>
              ))}
          </LinkList>
        </PageHeader.GridCellNarrowWindowOnly>
        <Grid.Cell span="all">
          <Heading className="ams-mb-s" level={2}>
            Alle onderwerpen
          </Heading>
          <LinkList>
            {megaMenuLinks.map((label) => (
              <LinkList.Link href="#" key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      </Grid>
    </PageHeader>
    {children}
    <PageFooter>
      <PageFooterContent />
    </PageFooter>
  </Page>
)
