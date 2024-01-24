/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { Badge } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  args: {
    label: 'Tip',
  },
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
      },
      options: ['blue', 'dark-blue', 'dark-green', 'green', 'magenta', 'orange', 'purple', 'yellow'],
      selected: 'dark-green',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
