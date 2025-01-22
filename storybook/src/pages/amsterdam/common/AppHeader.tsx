import { Header, LinkList } from '@amsterdam/design-system-react'

export const AppHeader = () => (
  <Header
    menuItems={[
      <Header.MenuLink key="1" href="#" lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink key="2" href="#">
        Mijn Amsterdam
      </Header.MenuLink>,
      <Header.MenuLink key="3" fixed href="#">
        Zoeken
      </Header.MenuLink>,
    ]}
    noMenuButtonOnWideWindow
  >
    <LinkList className="ams-mb--lg">
      <LinkList.Link href="#" lang="en">
        English
      </LinkList.Link>
      <LinkList.Link href="#">Mijn Amsterdam</LinkList.Link>
    </LinkList>
  </Header>
)
