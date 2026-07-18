/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CSSProperties } from 'react'

import { Logo } from '@amsterdam/design-system-react/src'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'

import ExampleLogo from './ExampleLogo'

const meta = {
  title: 'Components/Media/Logo',
  component: Logo,
  argTypes: {
    brand: {
      control: {
        labels: { undefined: 'amsterdam (default)' },
        type: 'select',
      },
      options: [undefined, ...logoBrands.filter((brand) => brand !== 'amsterdam')],
    },
  },
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomLogo: Story = {
  args: {
    brand: {
      label: 'Gemeente logo',
      svg: ExampleLogo,
    },
    style: {
      '--ams-logo-block-size': '1.5rem',
      '--ams-logo-min-block-size': '1.5rem',
    } as CSSProperties,
  },
}
