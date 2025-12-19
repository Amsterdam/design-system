/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import LogoCustom from '@amsterdam/design-system-react/dist/Logo/brand/LogoCustom'
import { Logo } from '@amsterdam/design-system-react/src'

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

export const Custom: Story = {
  args: {
    brand: {
      label: 'Gemeente logo',
      logo: LogoCustom,
    },
    style: {
      '--ams-logo-block-size': '1.5rem',
      '--ams-logo-min-block-size': '1.5rem',
    } as CSSProperties,
  },
}
