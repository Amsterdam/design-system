/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Badge } from '@amsterdam/design-system-react/src'
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
