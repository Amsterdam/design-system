/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Header, PageMenu } from '@amsterdam/design-system-react'
import { MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLogoVariant: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
  },
}

export const WithTitle: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
  },
}

export const WithHeaderMenu: Story = {
  args: {
    menu: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
    ),
  },
}

export const WithTitleAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    menu: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
    ),
  },
}
