/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Badge } from '@amsterdam/design-system-react/src/Badge/Badge'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  args: {
    label: 'Tip',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'dark-blue', 'dark-green', 'green', 'magenta', 'orange', 'purple', 'yellow'],
      selected: 'dark-green',
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
