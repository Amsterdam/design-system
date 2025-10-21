/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Badge } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as badgeMeta } from './Badge.stories'

const meta = {
  ...badgeMeta,
  title: 'Components/Feedback/Badge',
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Badge, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
