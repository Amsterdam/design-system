/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Badge } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    children: 'Tip',
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['blue', 'dark-blue', 'green', 'dark-green', 'orange', 'magenta', 'purple', 'yellow'],
      selected: 'dark-green',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
