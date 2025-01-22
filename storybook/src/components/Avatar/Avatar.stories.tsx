/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { avatarColors } from '../../../../packages/react/src/Avatar/Avatar'

const meta = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  args: {
    label: 'DS',
    imageSrc: '',
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
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128',
  },
}

export const FallbackIcon: Story = {
  args: {
    imageSrc: undefined,
    label: '',
  },
}
