/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar } from '@amsterdam/design-system-react/src'
import { avatarColors } from '@amsterdam/design-system-react/src/Avatar/Avatar'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  args: {
    imageSrc: '',
    label: 'DS',
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'purple (default)' },
      },
      options: [undefined, ...avatarColors],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    imageSrc: 'https://i.pravatar.cc/128',
    label: 'PS',
  },
}

export const FallbackIcon: Story = {
  args: {
    imageSrc: undefined,
    label: '',
  },
}
