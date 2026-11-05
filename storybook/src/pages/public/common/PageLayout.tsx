/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

import {
  Columns,
  Grid,
  Heading,
  LinkList,
  Page,
  PageFooter,
  PageHeader,
  SkipLink,
} from '@amsterdam/design-system-react'

import { topics } from '#storybook/_common/exampleContent'

import { PageFooterContent } from '../../../components/PageFooter/PageFooterContent'
import { pageHeaderMenuLinks } from './menu'

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
    {skipLinks.map(({ label, targetId }) => (
      <SkipLink href={`#${targetId}`} key={targetId}>
        {label}
      </SkipLink>
    ))}
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
          <Columns>
            <LinkList>
              {topics.map((topic) => (
                <LinkList.Link href="#" key={topic}>
                  {topic}
                </LinkList.Link>
              ))}
            </LinkList>
          </Columns>
        </Grid.Cell>
      </Grid>
    </PageHeader>
    {children}
    <PageFooter>
      <PageFooterContent />
    </PageFooter>
  </Page>
)
