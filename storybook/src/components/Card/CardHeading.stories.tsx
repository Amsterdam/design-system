/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'

import { headingLevelArgType, inverseColorArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.Heading,
  argTypes: {
    color: inverseColorArgType,
    level: headingLevelArgType(),
    size: {
      control: {
        labels: { undefined: 'level-3 (default)' },
        type: 'select',
      },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
    },
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof Card.Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading: Story = {
  args: {
    children: <Card.Link href="#">Meer plekken voor kunst en cultuur, verspreid over de stad</Card.Link>,
    level: 3,
  },
}
