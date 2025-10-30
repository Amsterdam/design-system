/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'

import { default as cardMeta } from './Card.stories'

const meta = {
  ...cardMeta,
  title: 'Components/Navigation/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
    <Card
      {...args}
      style={{
        maxWidth: '24rem',
      }}
    >
      <Card.Image alt="" aspectRatio="4:3" src="https://picsum.photos/id/122/1280/720" />
      <Card.HeadingGroup tagline="Nieuws">
        <Card.Heading level={3}>
          <Card.Link href="/">Nederlands eerste houten woonwijk komt in Zuidoost</Card.Link>
          <Card.Link className="hover" href="/">
            Nederlands eerste houten woonwijk komt in Zuidoost
          </Card.Link>
        </Card.Heading>
      </Card.HeadingGroup>
      <div>
        <p>We bouwen een levendige, groene en duurzame woonbuurt tussen de Gooiseweg en het Nelson Mandelapark.</p>
      </div>
    </Card>
  ),
  tags: ['!dev', '!autodocs'],
}
