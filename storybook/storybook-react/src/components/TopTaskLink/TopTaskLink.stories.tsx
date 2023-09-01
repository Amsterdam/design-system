/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { GridCell, PageGrid, TopTaskLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/top-task-link/top-task-link.scss'

const meta = {
  title: 'Top task link',
  component: TopTaskLink,
  args: {
    href: '/',
  },
} satisfies Meta<typeof TopTaskLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story) => (
      <PageGrid>
        <GridCell gridColumns={4}>
          <Story />
        </GridCell>
      </PageGrid>
    ),
  ],
  args: {
    href: '/',
    label: 'Titel',
    description: 'Omschrijving',
  },
}

export const ThreeColumns: Story = {
  render: () => (
    <PageGrid>
      <GridCell gridColumns={4}>
        <TopTaskLink
          href="/"
          label="Staat van de Stad"
          description="De Staat van de Stad Amsterdam biedt een overzicht van hoe de stad ervoor staat op tal van terreinen."
        />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink
          href="/"
          label="Metropoolregio Amsterdam"
          description="Onderzoek en Statistiek verzamelt cijfers over de MRA en doet onderzoek naar onder meer de woningmarkt en
          het toerisme in de regio."
        />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink
          href="/"
          label="Armoede"
          description="In Amsterdam leven meer mensen in armoede dan gemiddeld in Nederland. De afgelopen jaren daalde hun aantal
          in Amsterdam wel geleidelijk."
        />
      </GridCell>
    </PageGrid>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
}

export const FourColumns: Story = {
  render: () => (
    <PageGrid>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/" label="Meldingen" description="Melding openbare ruimte en overlast" />
      </GridCell>
    </PageGrid>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
}
