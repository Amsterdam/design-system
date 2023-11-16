/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Logo, VisuallyHidden } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Media/Logo',
  component: Logo,
  argTypes: {
    brand: {
      control: {
        type: 'select',
      },
      options: ['amsterdam', 'ggd-amsterdam', 'stadsarchief', 'stadsbank-van-lening', 'vga-verzekeringen'],
    },
  },
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DefaultWithLink: Story = {
  decorators: [
    (Story) => (
      <a href="https://amsterdam.nl">
        <VisuallyHidden>Naar de homepage van de Gemeente Amsterdam</VisuallyHidden>
        <Story />
      </a>
    ),
  ],
}

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
