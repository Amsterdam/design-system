/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Image, Paragraph } from '@amsterdam/design-system-react'
import { Card } from '@amsterdam/design-system-react/src'
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
      <Heading className="ams-mb-s" key={1} level={1} size="level-4">
        <Card.Link href="/">{topTask.heading}</Card.Link>
      </Heading>,
      <Paragraph key={2}>{topTask.description}</Paragraph>,
    ],
  },
}

export const WithTagline: Story = {
  args: {
    children: [
      <Card.HeadingGroup className="ams-mb-s" key={1} tagline="Dossier">
        <Heading level={1} size="level-4">
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
      <Image alt="" aspectRatio="4:3" className="ams-mb-s" key={1} src="https://picsum.photos/480/360" />,
      <Card.HeadingGroup className="ams-mb-s" key={2} tagline="Nieuws">
        <Heading level={1} size="level-4">
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
        </Heading>
      </Card.HeadingGroup>,
      <Paragraph className="ams-mb-s" key={3}>
        We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.
      </Paragraph>,
      <Paragraph key={4} size="small">
        {today}
      </Paragraph>,
    ],
  },
}
