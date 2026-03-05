/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton } from '@amsterdam/design-system-react'

const meta = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  args: {
    children: 'Loading...',
  },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
