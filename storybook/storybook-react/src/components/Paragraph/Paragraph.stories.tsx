/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

const meta = {
  title: 'Paragraph',
  component: Paragraph,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    inverseColor: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        labels: { undefined: 'default', large: 'large', small: 'small' },
      },
      options: [undefined, 'large', 'small'],
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div
        style={{
          background: context.args.inverseColor ? '#004699' : 'transparent',
          padding: context.args.inverseColor ? '16px' : 0,
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
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
          padding: '16px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
