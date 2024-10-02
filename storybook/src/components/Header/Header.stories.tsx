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

const SearchButton = (
  <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
    Zoeken
  </PageMenu.Button>
)

const SecondaryLinks = (
  <>
    <PageMenu.Link href="#" lang="en" rank="secondary">
      English
    </PageMenu.Link>
    <PageMenu.Link href="#" rank="secondary">
      Mijn Amsterdam
    </PageMenu.Link>
  </>
)

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['header', 'div'],
    },
  },
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
        <PageMenu.Link href="#">Menu link 1</PageMenu.Link>
        <PageMenu.Link href="#">Menu link 2</PageMenu.Link>
        <PageMenu.Link href="#">Menu link 3</PageMenu.Link>
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
    menu: (
      <PageMenu alignEnd>
        {SecondaryLinks}
        {SearchButton}
        {MenuButton}
      </PageMenu>
    ),
  },
}
