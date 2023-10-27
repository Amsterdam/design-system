/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { GridCell, PageGrid, TopTaskLink } from '@amsterdam/design-system-react'
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
        <GridCell span={4}>
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
      <GridCell span={4}>
        <TopTaskLink href="/" label="Melding openbare ruimte en overlast" />
      </GridCell>
      <GridCell span={4}>
        <TopTaskLink href="/" label="Verhuizing doorgeven" />
      </GridCell>
      <GridCell span={4}>
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
      <GridCell span={3}>
        <TopTaskLink href="/" label="Stadsloket" description="Locaties en openingstijden" />
      </GridCell>
      <GridCell span={3}>
        <TopTaskLink href="/" label="P+R" description="Parkeren en reizen" />
      </GridCell>
      <GridCell span={3}>
        <TopTaskLink href="/" label="Documenten" description="Paspoort, ID-kaart en rijbewijs" />
      </GridCell>
      <GridCell span={3}>
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
