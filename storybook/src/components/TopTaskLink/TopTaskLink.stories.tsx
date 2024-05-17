/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, TopTaskLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Top Task Link',
  component: TopTaskLink,
  parameters: {
    status: {
      type: 'beta',
    },
  },
} satisfies Meta<typeof TopTaskLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    description: 'Geef uw nieuwe adres door als u binnen Amsterdam of naar Amsterdam verhuist.',
    href: '#',
    label: 'Verhuizing doorgeven',
  },
}

export const Multiple: Story = {
  args: {
    description: 'Omschrijving',
    label: 'Titel',
  },
  render: () => (
    <Grid>
      <Grid.Cell span={3}>
        <TopTaskLink
          description="Bekijk welke belastingen en heffingen er zijn, hoe u bezwaar maakt of een betalingsregeling treft."
          href="#"
          label="Gemeentebelastingen"
        />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink
          description="U kunt met uw auto goedkoop parkeren bij een P+R-locatie aan de rand van de stad."
          href="#"
          label="Parkeren + Reizen (P+R)"
        />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink
          description="Vraag deze bewijzen aan of verleng ze. Geef een vermissing aan."
          href="#"
          label="Paspoort, ID-kaart en rijbewijs"
        />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink
          description="Meld een kind aan voor basisschool, middelbare school of kinderopvang. Bekijk het kindtegoed op uw Stadspas."
          href="#"
          label="Onderwijs"
        />
      </Grid.Cell>
    </Grid>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}
