/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList, Screen } from '@amsterdam/design-system-react'
import {
  Header,
  HeaderMenu,
  HeaderMenuLink,
  HeaderNavigation,
  MegaMenuButton,
  MegaMenuNavigation,
  MegaMenuNavigationMenu,
  MegaMenuSecondaryLinkList,
  MegaMenuSecondaryLinkListLink,
} from '@amsterdam/design-system-react/src'
import { MegaMenuListCategory } from '@amsterdam/design-system-react/src/MegaMenu/MegaMenuListCategory'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ForSubBrand: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
  },
}

export const WithAppName: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
  },
}

export const WithMenu: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    children: (
      <HeaderNavigation>
        <HeaderMenu>
          <HeaderMenuLink href="#">Menu link 1</HeaderMenuLink>
          <HeaderMenuLink href="#">Menu link 2</HeaderMenuLink>
          <HeaderMenuLink href="#">Menu link 3</HeaderMenuLink>
        </HeaderMenu>
      </HeaderNavigation>
    ),
  },
}

export const WithMegaMenu: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    hasMegaMenu: true,
  },
  render: (args) => (
    <Header {...args}>
      <MegaMenuNavigation appName={args.appName} logoBrand={args.logoBrand}>
        <HeaderMenu>
          <HeaderMenuLink href="#" secondary>
            Menu link 1
          </HeaderMenuLink>
          <HeaderMenuLink href="#" secondary>
            Menu link 2
          </HeaderMenuLink>
          <MegaMenuButton>Menu</MegaMenuButton>
        </HeaderMenu>
        <MegaMenuNavigationMenu>
          <Grid.Cell span="all">
            <MegaMenuSecondaryLinkList>
              <MegaMenuSecondaryLinkListLink href="#">Menu link 1</MegaMenuSecondaryLinkListLink>
              <MegaMenuSecondaryLinkListLink href="#">Menu link 2</MegaMenuSecondaryLinkListLink>
            </MegaMenuSecondaryLinkList>
            <Heading level={1} size="level-2">
              Alle onderwerpen
            </Heading>
            <MegaMenuListCategory>
              <LinkList>
                <LinkList.Link href="#">Afval</LinkList.Link>
                <LinkList.Link href="#">Bestuur en organisatie</LinkList.Link>
                <LinkList.Link href="#">Bouw- en verkeersprojecten</LinkList.Link>
                <LinkList.Link href="#">Burgerzaken</LinkList.Link>
                <LinkList.Link href="#">Diversiteit</LinkList.Link>
                <LinkList.Link href="#">Gemeentebelastingen</LinkList.Link>
                <LinkList.Link href="#">Gezondheidsdienst (GGD)</LinkList.Link>
                <LinkList.Link href="#">Kunst en cultuur</LinkList.Link>
                <LinkList.Link href="#">Ondernemen</LinkList.Link>
                <LinkList.Link href="#">Onderwijs en jeugd</LinkList.Link>
                <LinkList.Link href="#">Parkeren</LinkList.Link>
                <LinkList.Link href="#">Sport</LinkList.Link>
                <LinkList.Link href="#">Stadsdelen</LinkList.Link>
                <LinkList.Link href="#">Subsidies</LinkList.Link>
                <LinkList.Link href="#">Vacatures</LinkList.Link>
                <LinkList.Link href="#">Verkeer en vervoer</LinkList.Link>
                <LinkList.Link href="#">Vrije tijd</LinkList.Link>
                <LinkList.Link href="#">Werk aan de weg</LinkList.Link>
                <LinkList.Link href="#">Werk en inkomen</LinkList.Link>
                <LinkList.Link href="#">Wonen en leefomgeving</LinkList.Link>
                <LinkList.Link href="#">Zorg en ondersteuning</LinkList.Link>
              </LinkList>
            </MegaMenuListCategory>
          </Grid.Cell>
        </MegaMenuNavigationMenu>
      </MegaMenuNavigation>
    </Header>
  ),
}

// export const WithMenuButton: Story = {
//   args: {
//     menu: <PageMenu alignEnd>{MenuButton}</PageMenu>,
//   },
// }

// export const WithMenuAndMenuButton: Story = {
//   args: {
//     menu: (
//       <PageMenu alignEnd>
//         {SecondaryLinks}
//         {SearchButton}
//         {MenuButton}
//       </PageMenu>
//     ),
//   },
// }

// export const WithAppNameAndMenu: Story = {
//   args: {
//     appName: 'Onderzoek en Statistiek',
//     menu: <PageMenu alignEnd>{MenuButton}</PageMenu>,
//   },
// }

// export const WithAppNameMenuAndMenuButton: Story = {
//   args: {
//     appName: 'Onderzoek en Statistiek',
//   },
// }
