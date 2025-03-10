import { Avatar, Header } from '@amsterdam/design-system-react'

const getRandomLetter = () => Math.floor(Math.random() * 26) + 65
const generateInitials = (): string => String.fromCharCode(...[getRandomLetter(), getRandomLetter()])

export const SiteHeader = () => (
  <Header
    brandName="Amopis"
    logoLink="amopis"
    logoLinkTitle="Naar de homepage van Amopis"
    menuItems={
      <Header.MenuLink href="#">
        <Avatar label={generateInitials()} />
      </Header.MenuLink>
    }
  />
)
