/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Badge, Column } from '@amsterdam/design-system-react/src'
import { badgeColors } from '@amsterdam/design-system-react/src/Badge/Badge'
import type { BadgeColor } from '@amsterdam/design-system-react/src/Badge/Badge'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  args: {
    label: 'Tip',
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

const updateColorName = (color: BadgeColor) => {
  const mapping: Partial<Record<BadgeColor, string>> = {
    'dark-green': 'green',
    green: 'lime',
    'light-blue': 'azure',
  }

  return mapping[color] ?? color
}

export const AllColours: Story = {
  args: {
    label: 'Badge label',
  },
  render: () => (
    <Column alignHorizontal="start">
      {badgeColors
        .filter((color) => !color.startsWith('grey-'))
        .map((color) => (
          <Badge key={color} color={color} label={updateColorName(color)} />
        ))}
    </Column>
  ),
}
