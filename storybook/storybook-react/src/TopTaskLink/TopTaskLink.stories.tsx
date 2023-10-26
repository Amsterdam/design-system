/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, TopTaskLink } from '@amsterdam/design-system-react'
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
      <Grid>
        <Grid.Cell span={4}>
          <Story />
        </Grid.Cell>
      </Grid>
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
    <Grid>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </Grid.Cell>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </Grid.Cell>
      <Grid.Cell span={4}>
        <TopTaskLink href="/" label="Kennisgevingen en bekendmakingen" />
      </Grid.Cell>
    </Grid>
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
    <Grid>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </Grid.Cell>
      <Grid.Cell span={3}>
        <TopTaskLink href="/" label="Meldingen" description="Melding openbare ruimte en overlast" />
      </Grid.Cell>
    </Grid>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}
