/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Breakout } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Layout/Breakout',
  component: Breakout.Cell,
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
    },
  },
  decorators: [
    (Story) => (
      <Breakout>
        <Story />
      </Breakout>
    ),
  ],
} satisfies Meta<typeof Breakout.Cell>

export default meta

type Story = StoryObj<typeof meta>

export const Cell: Story = {
  args: {
    children: <Paragraph>Cell content</Paragraph>,
    colSpan: 'all',
  },
}
