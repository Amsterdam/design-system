/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons'
import { Badge } from '@amsterdam/design-system-react/src'
import { badgeColors } from '@amsterdam/design-system-react/src/Badge/Badge'

const meta = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  args: {
    label: 'Tip',
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'green (default)' },
      },
      options: [undefined, ...badgeColors],
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    color: 'red',
    icon: Icons.LockClosedFillIcon,
    label: 'Beveiligd',
  },
}
