/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    level: 1,
    size: 'level-1',
  },
  argTypes: {
    size: {
      options: ['level-1', 'level-2', 'level-3', 'level-4'],
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading1: Story = {}

export const Heading2: Story = {
  args: {
    level: 2,
    size: 'level-2',
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    size: 'level-3',
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    size: 'level-4',
  },
}
