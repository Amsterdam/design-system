/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Heading, LinkList, Screen } from '@amsterdam/design-system-react'
import { MegaMenu } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Mega Menu',
  component: MegaMenu,
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
} satisfies Meta<typeof MegaMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Grid key="nav" paddingVertical="medium">
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
            </LinkList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const MultipleCategories: Story = {
  args: {
    children: (
      <Grid key="nav" paddingVertical="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
          <Heading level={3} size="level-3">
            Thema’s
          </Heading>
          <MegaMenu.ListCategory>
            <LinkList>
              <LinkList.Link href="#" size="large">
                Afval
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Bestuur en organisatie
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Bouw- en verkeersprojecten
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Burgerzaken
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Diversiteit
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Gemeentebelastingen
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Gezondheidsdienst (GGD)
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Kunst en cultuur
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Ondernemen
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Onderwijs en jeugd
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Parkeren
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Sport
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Stadsdelen
              </LinkList.Link>
              <LinkList.Link href="#" size="large">
                Subsidies
              </LinkList.Link>
            </LinkList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
          <Heading level={3} size="level-3">
            Categorieën
          </Heading>
          <MegaMenu.ListCategory>
            <LinkList>
              <LinkList.Link href="#">Vacatures</LinkList.Link>
              <LinkList.Link href="#">Verkeer en vervoer</LinkList.Link>
              <LinkList.Link href="#">Vrije tijd</LinkList.Link>
              <LinkList.Link href="#">Werk aan de weg</LinkList.Link>
              <LinkList.Link href="#">Werk en inkomen</LinkList.Link>
              <LinkList.Link href="#">Wonen en leefomgeving</LinkList.Link>
            </LinkList>
          </MegaMenu.ListCategory>
          <Heading level={3} size="level-3">
            Snel naar
          </Heading>
          <MegaMenu.ListCategory>
            <LinkList>
              <LinkList.Link href="#">Vacatures</LinkList.Link>
              <LinkList.Link href="#">Verkeer en vervoer</LinkList.Link>
              <LinkList.Link href="#">Vrije tijd</LinkList.Link>
              <LinkList.Link href="#">Werk aan de weg</LinkList.Link>
            </LinkList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
      </Grid>
    ),
  },
}
