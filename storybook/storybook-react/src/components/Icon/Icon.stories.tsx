/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react/src'
import { Email } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Icon',
  id: 'icon',
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    svg: Email,
  },
}

export const WithText: Story = {
  args: {
    svg: Email,
  },
}

export const Level3: Story = {
  args: {
    svg: Email,
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    svg: Email,
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    svg: Email,
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    svg: Email,
    size: 'level-6',
  },
}

export const Level7: Story = {
  args: {
    svg: Email,
    size: 'level-7',
  },
}
