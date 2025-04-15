import { Grid, Heading, LinkList, PageHeader } from '@amsterdam/design-system-react'
import { megaMenuLinks, pageHeaderMenuLinks } from './menu'

export const AppHeader = () => (
  <PageHeader
    menuItems={pageHeaderMenuLinks.map(({ fixed, href, label, lang }) => (
      <PageHeader.MenuLink fixed={fixed} href={href ?? '#'} key={label} lang={lang} rel={href ? 'external' : undefined}>
        {label}
      </PageHeader.MenuLink>
    ))}
  >
    <Grid paddingBottom="large" paddingTop="small">
      <PageHeader.GridCellNarrowWindowOnly span="all">
        <LinkList>
          {pageHeaderMenuLinks
            .filter((link) => !link.fixed)
            .map(({ href, label, lang }) => (
              <LinkList.Link href={href ?? '#'} key={label} lang={lang} rel={href ? 'external' : undefined}>
                {label}
              </LinkList.Link>
            ))}
        </LinkList>
      </PageHeader.GridCellNarrowWindowOnly>
      <Grid.Cell span="all">
        <Heading className="ams-mb-s" level={3}>
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
)
