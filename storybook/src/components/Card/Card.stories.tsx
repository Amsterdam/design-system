/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Card, Heading, Image, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleTopTask } from '../shared/exampleContent'

const dateFormat = new Intl.DateTimeFormat('nl', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})
const today = dateFormat.format(Date.now())

const topTask = exampleTopTask()

const meta = {
  title: 'Components/Navigation/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '24rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Heading size="level-4" key={1}>
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>,
      <Paragraph key={2}>{topTask.description}</Paragraph>,
    ],
  },
}

export const WithTagline: Story = {
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
    ],
  },
}

export const WithImage: Story = {
  args: {
    children: [
      <AspectRatio key={1} ratio="wide">
        <Image alt="" src="https://picsum.photos/480/360" />
      </AspectRatio>,
      <Card.HeadingGroup key={2} tagline="Dossier">
        <Heading size="level-4">
          <Card.Link href="/">Monitor Attracties MRA</Card.Link>
        </Heading>
      </Card.HeadingGroup>,
      <Paragraph key={3}>
        Ontwikkeling van het aantal attracties en bezoekers in de metropoolregio Amsterdam.
      </Paragraph>,
      <Paragraph key={4} size="small">
        {today}
      </Paragraph>,
    ],
  },
}
