/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Header, Heading, Link, PageMenu, UnorderedList } from '@amsterdam/design-system-react'
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
    menu: (
      <Grid key="nav" paddingVertical="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
          <Heading level={3} size="level-3">
            Thema&rsquo;s
          </Heading>
          <UnorderedList markers={false}>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Afval
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Bestuur en organisatie
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Bouw- en verkeersprojecten
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Burgerzaken
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Diversiteit
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Gemeentebelastingen
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Gezondheidsdienst (GGD)
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Kunst en cultuur
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Ondernemen
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Onderwijs en jeugd
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Parkeren
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Sport
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Stadsdelen
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Subsidies
              </Link>
            </UnorderedList.Item>
          </UnorderedList>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
          <Heading level={3} size="level-3">
            Categorieën
          </Heading>
          <UnorderedList markers={false}>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Vacatures
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Verkeer en vervoer
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Vrije tijd
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Werk aan de weg
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Werk en inkomen
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Wonen en leefomgeving
              </Link>
            </UnorderedList.Item>
          </UnorderedList>
          <Heading level={3} size="level-3">
            Snel naar
          </Heading>
          <UnorderedList markers={false}>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Vacatures
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Verkeer en vervoer
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Vrije tijd
              </Link>
            </UnorderedList.Item>
            <UnorderedList.Item>
              <Link variant="inList" href="#">
                Werk aan de weg
              </Link>
            </UnorderedList.Item>
          </UnorderedList>
        </Grid.Cell>
      </Grid>
    ),
  },
}
