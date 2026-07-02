/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.Link,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
  },
  decorators: [
    (Story) => (
      <Card>
        <Card.Heading level={3}>
          <Story />
        </Card.Heading>
      </Card>
    ),
  ],
} satisfies Meta<typeof Card.Link>

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    children: 'Meer plekken voor kunst en cultuur, verspreid over de stad',
    href: '#',
  },
}
