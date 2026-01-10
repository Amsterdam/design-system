/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList, PageHeader } from '@amsterdam/design-system-react'

import { megaMenuLinkLists, pageHeaderMenuLinks } from './menu'

export const AppHeader = () => (
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
              <LinkList.Link href={href ?? '#'} icon={icon} key={label} lang={lang} rel={href ? 'external' : undefined}>
                {label}
              </LinkList.Link>
            ))}
        </LinkList>
      </PageHeader.GridCellNarrowWindowOnly>
      <Grid.Cell span="all" style={{ marginBlockEnd: 'calc(var(--ams-space-xl) * -1)' }}>
        <Heading className="ams-mb-s" level={2}>
          Alle onderwerpen
        </Heading>
      </Grid.Cell>
      {megaMenuLinkLists.map((list, index) => (
        <Grid.Cell key={index} span={4}>
          <LinkList>
            {list.map((label) => (
              <LinkList.Link href="#" key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </Grid.Cell>
      ))}
    </Grid>
  </PageHeader>
)
