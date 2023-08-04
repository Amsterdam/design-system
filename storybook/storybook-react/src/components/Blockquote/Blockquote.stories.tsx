/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Blockquote',
  component: Blockquote,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    inverseColor: false,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

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
