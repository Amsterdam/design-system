/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// import { PageMenu } from '@amsterdam/design-system-react'
import { Grid, Heading, LinkList } from '@amsterdam/design-system-react'
import { Header } from '@amsterdam/design-system-react/src'
// import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alwaysShowMenuButton: true,
    appName: 'Aan de Amsterdamse grachten',
    children: (
      <Grid.Cell span="all">
        <Heading size="level-2">Alle onderwerpen</Heading>
        {/* <Header.ListCategory> */}
        <LinkList>
          <LinkList.Link href="#">Afval</LinkList.Link>
          <LinkList.Link href="#">Bestuur en organisatie</LinkList.Link>
          <LinkList.Link href="#">Bouw- en verkeersprojecten</LinkList.Link>
        </LinkList>
        {/* </Header.ListCategory> */}
      </Grid.Cell>
    ),
    menu: (
      <>
        <Header.MenuLink href="#" lang="en" secondary>
          English
        </Header.MenuLink>
        <Header.MenuLink href="#" secondary>
          Contact
        </Header.MenuLink>
      </>
    ),
  },
}

export const Default2: Story = {
  args: {
    appName: 'Aan de Amsterdamse grachten',
    children: (
      <Grid.Cell span="all">
        {/* <Header.ListCategory> */}
        <LinkList>
          <LinkList.Link href="#">English</LinkList.Link>
          <LinkList.Link href="#">Contact</LinkList.Link>
        </LinkList>
        {/* </Header.ListCategory> */}
      </Grid.Cell>
    ),
    menu: (
      <>
        <Header.MenuLink href="#" lang="en" secondary>
          English
        </Header.MenuLink>
        <Header.MenuLink href="#" secondary>
          Contact
        </Header.MenuLink>
      </>
    ),
  },
}

// export const ForSubBrand: Story = {
//   args: {
//     logoBrand: 'ggd-amsterdam',
//     logoLink: 'https://www.ggd.amsterdam.nl/',
//     logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
//   },
// }

// export const WithAppName: Story = {
//   args: {
//     appName: 'Aan de Amsterdamse grachten',
//   },
// }

// export const WithLinks: Story = {
//   args: {
//     links: (
//       <PageMenu alignEnd wrap={false}>
//         <PageMenu.Link href="#">Contact</PageMenu.Link>
//         <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
//         <PageMenu.Link href="#" icon={SearchIcon}>
//           Zoeken
//         </PageMenu.Link>
//       </PageMenu>
//     ),
//   },
// }

// export const WithMenuButton: Story = {
//   args: {
//     menu: <button className="ams-header__menu-button">Menu</button>,
//   },
// }

// export const WithLinksAndMenuButton: Story = {
//   args: {
//     links: (
//       <PageMenu alignEnd wrap={false}>
//         <PageMenu.Link href="#">Contact</PageMenu.Link>
//         <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
//         <PageMenu.Link href="#" icon={SearchIcon}>
//           Zoeken
//         </PageMenu.Link>
//       </PageMenu>
//     ),
//     menu: <button className="ams-header__menu-button">Menu</button>,
//   },
// }

// export const WithAppNameAndMenuButton: Story = {
//   args: {
//     appName: 'Aan de Amsterdamse grachten',
//     menu: <button className="ams-header__menu-button">Menu</button>,
//   },
// }

// export const WithAppNameLinksAndMenuButton: Story = {
//   args: {
//     appName: 'Aan de Amsterdamse grachten',
//     links: (
//       <PageMenu alignEnd wrap={false}>
//         <PageMenu.Link href="#">Contact</PageMenu.Link>
//         <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
//         <PageMenu.Link href="#" icon={SearchIcon}>
//           Zoeken
//         </PageMenu.Link>
//       </PageMenu>
//     ),
//     menu: <button className="ams-header__menu-button">Menu</button>,
//   },
// }
