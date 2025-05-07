/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Badge } from '@aram-limpens/design-system-react/src'
import { badgeColors } from '@aram-limpens/design-system-react/src/Badge/Badge'
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
        labels: { undefined: 'green (default)' },
      },
      options: [undefined, ...badgeColors],
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
