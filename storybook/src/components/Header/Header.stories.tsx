/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList, MegaMenu, PageMenu, Screen } from '@amsterdam/design-system-react'
import { Header } from '@amsterdam/design-system-react/src'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const MenuButton = (
  <PageMenu.Item>
    <PageMenu.Button icon={MenuIcon} onClick={() => {}}>
      Menu
    </PageMenu.Button>
  </PageMenu.Item>
)

const SearchButton = (
  <PageMenu.Item>
    <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
      Zoeken
    </PageMenu.Button>
  </PageMenu.Item>
)

const SecondaryLinks = (
  <>
    <PageMenu.Item rank="secondary">
      <PageMenu.Link href="#" lang="en">
        English
      </PageMenu.Link>
    </PageMenu.Item>
    <PageMenu.Item rank="secondary">
      <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
    </PageMenu.Item>
  </>
)

const CompleteNav = (
  <>
    <Grid paddingBottom="large" style={{ width: '100%', pointerEvents: 'auto' }}>
      <Grid.Cell span="all">
        <Heading level={1} size="level-2">
          Alle onderwerpen
        </Heading>
        <MegaMenu.ListCategory>
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
        </MegaMenu.ListCategory>
      </Grid.Cell>
    </Grid>
  </>
)

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
    menu: (
      <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 1</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 2</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Menu link 3</PageMenu.Link>
        </PageMenu.Item>
      </PageMenu>
    ),
  },
}

export const WithMenuButton: Story = {
  args: {
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>,
  },
}

export const WithMenuAndMenuButton: Story = {
  args: {
    menu: (
      <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
    ),
  },
}

export const WithAppNameAndMenu: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <PageMenu alignEnd>{MenuButton}</PageMenu>,
  },
}

export const WithAppNameMenuAndMenuButton: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: CompleteNav,
  },
}
