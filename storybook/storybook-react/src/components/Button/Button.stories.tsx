/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta = {
  title: 'Button',
  id: 'react-button',
  component: Button,
  args: {
    children: 'Default',
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonPrimary: Story = {
  name: 'Button Primary',
  args: {
    children: 'Primary',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

export const ButtonSecondary: Story = {
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  argTypes: { ...ButtonPrimary.argTypes },
}

export const ButtonTertiary: Story = {
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
  argTypes: { ...ButtonPrimary.argTypes },
}
