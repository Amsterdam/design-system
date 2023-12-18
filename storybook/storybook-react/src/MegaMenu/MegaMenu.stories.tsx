/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Heading, Link, MegaMenu, UnorderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Mega Menu',
  component: MegaMenu,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof MegaMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Grid key="nav">
        <Grid.Cell fullWidth>
          <Heading level={1} size="level-2">
            Alle onderwerpen
          </Heading>
        </Grid.Cell>
        <Grid.Cell span={4}>
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
          </UnorderedList>
        </Grid.Cell>
        <Grid.Cell span={4}>
          <UnorderedList markers={false}>
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
        <Grid.Cell span={4}>
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
        </Grid.Cell>
      </Grid>,
    ],
  },
}

export const MultipleCategories: Story = {
  args: {
    children: [
      <Grid key="nav">
        <Grid.Cell span={8}>
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
        <Grid.Cell span={4}>
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
      </Grid>,
    ],
  },
}
