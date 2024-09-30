/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageMenu, Screen } from '@amsterdam/design-system-react'
import { Header } from '@amsterdam/design-system-react/src'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const MenuButton = (
  <PageMenu.Button icon={MenuIcon} onClick={() => {}}>
    Menu
  </PageMenu.Button>
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

export const WithLinks: Story = {
  args: {
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        {MenuButton}
      </PageMenu>
    ),
  },
}

export const WithMenuButton: Story = {
  args: {
    links: <PageMenu alignEnd>{MenuButton}</PageMenu>,
  },
}

export const WithLinksAndMenuButton: Story = {
  args: {
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        {MenuButton}
      </PageMenu>
    ),
  },
}

export const WithAppNameAndMenuButton: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
  },
}

export const WithAppNameLinksAndMenuButton: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        {MenuButton}
      </PageMenu>
    ),
  },
}
