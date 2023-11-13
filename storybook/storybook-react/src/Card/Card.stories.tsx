/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AspectRatio, Card, Heading, Image, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Card',
  component: Card,
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Heading size="level-4" key={1}>
        <Card.Link href="/">Monitor Attracties MRA</Card.Link>
      </Heading>,
      <Paragraph key={2} size="small">
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>,
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export const CardWithTagline: Story = {
  args: {
    children: [
      <Card.HeadingGroup key={1} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>,
      <Paragraph key={2}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>,
      <Paragraph key={3} size="small">
        Laatst gewijzigd: 28 september 2023
      </Paragraph>,
    ],
  },
}

export const ImageCard: Story = {
  args: {
    children: [
      <AspectRatio key={1} ratio="wide">
        <Image alt="" src="https://picsum.photos/450/360" />
      </AspectRatio>,
      <Card.HeadingGroup key={2} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>,
      <Paragraph key={3} size="small">
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>,
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '440px' }}>
        <Story />
      </div>
    ),
  ],
}
