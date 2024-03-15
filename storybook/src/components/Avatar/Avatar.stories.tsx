/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Feedback/Avatar',
  component: Avatar,
  args: {
    label: 'DS',
    imageUrl: '',
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['blue', 'dark-blue', 'dark-green', 'green', 'magenta', 'orange', 'purple', 'red', 'yellow'],
      selected: 'dark-blue',
    },
  },
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithoutLabel: Story = {
  args: {
    label: '',
  },
}

export const WithImageURL: Story = {
  args: {
    label: 'RS',
    imageUrl: 'https://web.archive.org/web/20230610011324im_/https://avatars.githubusercontent.com/u/7290629?v=4',
  },
}
