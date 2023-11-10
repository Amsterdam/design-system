/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Logo } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Media/Logo',
  component: Logo,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['amsterdam', 'ggd-amsterdam', 'stadsarchief', 'stadsbank-lening', 'vga-verzekeringen'],
    },
  },
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GGDAmsterdam: Story = {
  args: {
    variant: 'ggd-amsterdam',
  },
}

export const Stadsarchief: Story = {
  args: {
    variant: 'stadsarchief',
  },
}

export const StadsbankLening: Story = {
  args: {
    variant: 'stadsbank-lening',
  },
}

export const VGAVerzekeringen: Story = {
  args: {
    variant: 'vga-verzekeringen',
  },
}
