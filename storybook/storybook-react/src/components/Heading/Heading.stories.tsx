/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/heading/heading.scss'

const meta = {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    level: 1,
    styleLevel: 1,
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading1: Story = {}

export const Heading2: Story = {
  args: {
    level: 2,
    styleLevel: 2,
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    styleLevel: 3,
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    styleLevel: 4,
  },
}
