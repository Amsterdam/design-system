/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react'
import { Header } from '@amsterdam/design-system-react/src'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
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
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>
    ),
  },
}

export const WithMenuButton: Story = {
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}

export const WithLinksAndMenuButton: Story = {
  args: {
    links: (
      <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>
    ),
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}

export const WithAppNameAndMenuButton: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}

export const WithAppNameLinksAndMenuButton: Story = {
  args: {
    appName: 'Onderzoek en Statistiek',
    links: (
      <PageMenu alignEnd>
        <PageMenu.Item>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        </PageMenu.Item>
        <PageMenu.Item>
          <PageMenu.Button icon={SearchIcon} onClick={() => {}}>
            Zoeken
          </PageMenu.Button>
        </PageMenu.Item>
      </PageMenu>
    ),
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}
