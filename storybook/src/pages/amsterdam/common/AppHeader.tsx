import { Header, LinkList } from '@amsterdam/design-system-react'

export const AppHeader = () => (
  <Header
    menuItems={[
      <Header.MenuLink href="#" key="1" lang="en">
        English
      </Header.MenuLink>,
      <Header.MenuLink href="#" key="2">
        Mijn Amsterdam
      </Header.MenuLink>,
      <Header.MenuLink fixed href="#" key="3">
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
