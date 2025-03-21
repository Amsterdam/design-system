import { Grid, Header, Heading, LinkList } from '@amsterdam/design-system-react'
import { headerMenuLinks, megaMenuLinks } from './menu'

export const AppHeader = () => (
  <Header
    menuItems={headerMenuLinks.map(({ fixed, href, label, lang }) => (
      <Header.MenuLink fixed={fixed} href={href ?? '#'} key={label} lang={lang} rel={href ? 'external' : undefined}>
        {label}
      </Header.MenuLink>
    ))}
  >
    <Grid paddingBottom="large" paddingTop="small">
      <Header.GridCellNarrowWindowOnly span="all">
        <LinkList>
          {headerMenuLinks
            .filter((link) => !link.fixed)
            .map(({ href, label, lang }) => (
              <LinkList.Link href={href ?? '#'} key={label} lang={lang} rel={href ? 'external' : undefined}>
                {label}
              </LinkList.Link>
            ))}
        </LinkList>
      </Header.GridCellNarrowWindowOnly>
      <Grid.Cell span="all">
        <Heading className="ams-mb-s" level={3}>
          Alle onderwerpen
        </Heading>
        <div className="ams-mega-menu__columns">
          <LinkList>
            {megaMenuLinks.map((label) => (
              <LinkList.Link href="#" key={label}>
                {label}
              </LinkList.Link>
            ))}
          </LinkList>
        </div>
      </Grid.Cell>
    </Grid>
  </Header>
)
