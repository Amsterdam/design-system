/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Header, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, MenuIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSiteTitle: Story = {
  args: {
    title: 'Aan de Amsterdamse Grachten',
  },
}

export const WithLogoVariant: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de website van de GGD Amsterdam',
  },
}

export const WithHeaderMenu: Story = {
  args: {
    menu: (
      <PageMenu>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#" icon={LoginIcon}>
          Inloggen Mijn Amsterdam
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
    ),
  },
}

export const WithBoth: Story = {
  args: {
    title: 'Aan de Amsterdamse Grachten',
    menu: (
      <PageMenu>
        <PageMenu.Link href="#">Souvenirs</PageMenu.Link>
        <PageMenu.Link href="#">English</PageMenu.Link>
        <PageMenu.Link href="#">Souvenirs</PageMenu.Link>
        <PageMenu.Link href="#" icon={LoginIcon}>
          Inloggen Mijn Amsterdam
        </PageMenu.Link>
        <PageMenu.Button icon={MenuIcon} showOnMobile>
          Menu
        </PageMenu.Button>
      </PageMenu>
    ),
  },
}
