/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Header, Heading, Link, MegaMenu, PageMenu, Screen, UnorderedList } from '@amsterdam/design-system-react'
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
    menu: (
      <Grid paddingVertical="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
          <Heading level={3} size="level-3">
            Thema&rsquo;s
          </Heading>
          <MegaMenu.ListCategory>
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
          </MegaMenu.ListCategory>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
          <Heading level={3} size="level-3">
            Categorieën
          </Heading>
          <MegaMenu.ListCategory>
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
          </MegaMenu.ListCategory>
          <Heading level={3} size="level-3">
            Snel naar
          </Heading>
          <MegaMenu.ListCategory>
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
          </MegaMenu.ListCategory>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const WithLinksAndMenu: Story = {
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
    menu: (
      <MegaMenu>
        <Grid paddingVertical="large">
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
            <Heading level={3} size="level-3">
              Thema&rsquo;s
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
            <Heading level={3} size="level-3">
              Categorieën
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
            <Heading level={3} size="level-3">
              Snel naar
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
        </Grid>
      </MegaMenu>
    ),
  },
}

export const WithLinksAndMainMenu: Story = {
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
    menu: (
      <MegaMenu>
        <Grid key="nav" paddingVertical="large">
          <Grid.Cell span="all">
            <Heading level={1} size="level-2" className="amsterdam-mega-menu__heading">
              Alle onderwerpen
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
        </Grid>
      </MegaMenu>
    ),
  },
}

export const WithTitleAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    menu: (
      <MegaMenu>
        <Grid paddingVertical="medium">
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
            <Heading level={3} size="level-3">
              Thema&rsquo;s
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
            <Heading level={3} size="level-3">
              Categorieën
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
            <Heading level={3} size="level-3">
              Snel naar
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
        </Grid>
      </MegaMenu>
    ),
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
      <MegaMenu>
        <Grid paddingVertical="medium">
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
            <Heading level={3} size="level-3">
              Thema&rsquo;s
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
          <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
            <Heading level={3} size="level-3">
              Categorieën
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
            <Heading level={3} size="level-3">
              Snel naar
            </Heading>
            <MegaMenu.ListCategory>
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
            </MegaMenu.ListCategory>
          </Grid.Cell>
        </Grid>
      </MegaMenu>
    ),
  },
}
