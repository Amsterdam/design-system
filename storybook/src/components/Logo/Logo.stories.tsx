/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Logo } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const GgdAmsterdam: Story = {
  args: {
    brand: 'ggd-amsterdam',
  },
}

export const Stadsarchief: Story = {
  args: {
    brand: 'stadsarchief',
  },
}

export const StadsbankVanLening: Story = {
  args: {
    brand: 'stadsbank-van-lening',
  },
}

export const VgaVerzekeringen: Story = {
  args: {
    brand: 'vga-verzekeringen',
  },
}

export const MuseumWeesp: Story = {
  args: {
    brand: 'museum-weesp',
  },
}
