/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Metadata } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.HeadingGroup,
  // The render wires a Metadata child rather than the deprecated prop, so its control would do nothing.
  argTypes: {
    tagline: { control: false },
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  tags: ['!manifest'],
} satisfies Meta<typeof Card.HeadingGroup>

export default meta

type Story = StoryObj<typeof meta>

export const HeadingGroup: Story = {
  args: {
    children: [
      <Card.Heading key={1} level={3}>
        <Card.Link href="#">Meer plekken voor kunst en cultuur, verspreid over de stad</Card.Link>
      </Card.Heading>,
      <Metadata key={2} size="small">
        Nieuws
      </Metadata>,
    ],
  },
}
