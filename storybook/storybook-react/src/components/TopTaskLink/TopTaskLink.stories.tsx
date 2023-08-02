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
  render: () => (
    <PageGrid>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Titel</TopTaskLink.Title>
          <TopTaskLink.Description>Omschrijving</TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
    </PageGrid>
  ),
}

export const ThreeColumns: Story = {
  render: () => (
    <PageGrid>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Staat van de Stad</TopTaskLink.Title>
          <TopTaskLink.Description>
            De Staat van de Stad Amsterdam biedt een overzicht van hoe de stad ervoor staat op tal van terreinen.
          </TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Metropoolregio Amsterdam</TopTaskLink.Title>
          <TopTaskLink.Description>
            Onderzoek en Statistiek verzamelt cijfers over de MRA en doet onderzoek naar onder meer de woningmarkt en
            het toerisme in de regio.
          </TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Armoede</TopTaskLink.Title>
          <TopTaskLink.Description>
            In Amsterdam leven meer mensen in armoede dan gemiddeld in Nederland. De afgelopen jaren daalde hun aantal
            in Amsterdam wel geleidelijk.
          </TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
    </PageGrid>
  ),
}

export const FourColumns: Story = {
  render: () => (
    <PageGrid>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Stadsloket</TopTaskLink.Title>
          <TopTaskLink.Description>Locaties en openingstijden</TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>P+R</TopTaskLink.Title>
          <TopTaskLink.Description>Parkeren en reizen</TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Documenten</TopTaskLink.Title>
          <TopTaskLink.Description>Paspoort, ID-kaart en rijbewijs</TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
      <GridCell gridColumns={3}>
        <TopTaskLink href="/">
          <TopTaskLink.Title>Meldingen</TopTaskLink.Title>
          <TopTaskLink.Description>Melding openbare ruimte en overlast</TopTaskLink.Description>
        </TopTaskLink>
      </GridCell>
    </PageGrid>
  ),
}
