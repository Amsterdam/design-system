/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.HeadingGroup,
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof Card.HeadingGroup>

export default meta

type Story = StoryObj<typeof meta>

export const HeadingGroup: Story = {
  args: {
    children: (
      <Card.Heading level={3}>
        <Card.Link href="#">Meer plekken voor kunst en cultuur, verspreid over de stad</Card.Link>
      </Card.Heading>
    ),
    tagline: 'Nieuws',
  },
}
