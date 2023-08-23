/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    inverseColor: false,
  },
  argTypes: {
    level: {
      control: 'radio',
      options: [1, 2, 3, 4],
    },
    size: {
      control: 'radio',
      options: ['level-1', 'level-2', 'level-3', 'level-4'],
    },
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div
        style={{
          background: context.args.inverseColor ? '#004699' : 'transparent',
          margin: context.args.inverseColor ? -16 : 0,
          padding: context.args.inverseColor ? 16 : 0,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Heading1: Story = {
  args: {
    level: 1,
    size: 'level-1',
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    size: 'level-2',
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    size: 'level-3',
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    size: 'level-4',
  },
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: '#004699',
          margin: -16,
          padding: 16,
        }}
      >
        <Story />
      </div>
    ),
  ],
}
