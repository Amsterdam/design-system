import { Button } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta = {
  title: 'CSS Components/Button',
  id: 'css-button',
  component: Button,
  argTypes: {},
  args: {
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
}

export const ButtonSecondary: Story = {
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const ButtonTertiary: Story = {
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
}
