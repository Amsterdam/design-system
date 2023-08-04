/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Hero } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Hero',
  component: Hero,
  args: {
    children: 'Gemeente Amsterdam',
    inverseColor: undefined,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Hero>

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
