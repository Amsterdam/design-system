/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Header, PageMenu } from '@amsterdam/design-system-react'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Header',
  component: Header,
  argTypes: {
    logoBrand: {
      control: {
        type: 'select',
      },
      options: ['amsterdam', 'ggd-amsterdam', 'stadsarchief', 'stadsbank-van-lening', 'vga-verzekeringen'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
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

export const WithLinks: Story = {
  args: {
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
  },
}

export const WithMenu: Story = {
  args: {
    menu: <button className="amsterdam-header__menu-button">Menu</button>,
  },
}

export const WithLinksAndMenu: Story = {
  args: {
    menu: <button className="amsterdam-header__menu-button">Menu</button>,
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
  },
}

export const WithTitleAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    menu: <button className="amsterdam-header__menu-button">Menu</button>,
  },
}

export const WithTitleLinksAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    links: (
      <PageMenu alignEnd>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
    menu: <button className="amsterdam-header__menu-button">Menu</button>,
  },
}
