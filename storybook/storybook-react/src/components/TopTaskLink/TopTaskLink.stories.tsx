/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { GridCell, PageGrid, TopTaskLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/top-task-link/top-task-link.scss'

const meta = {
  title: 'Navigation/Top Task Link',
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

export const WithoutDescription: Story = {
  args: {
    label: 'Titel',
  },
  render: () => (
    <PageGrid>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </GridCell>
      <GridCell gridColumns={4}>
        <TopTaskLink href="/" label="Kennisgevingen en bekendmakingen" />
      </GridCell>
    </PageGrid>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Titel',
  },
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
    },
  },
}
