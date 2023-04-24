/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

const meta: Meta<typeof Button> = {
  title: 'Button',
  id: 'css-button',
  component: Button,
  args: {
    children: 'Default',
    disabled: false,
  },
  tags: ['autodocs'],
}

export default meta

export const ButtonPrimary: StoryObj<typeof Button> = {
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

export const ButtonSecondary: StoryObj<typeof Button> = {
  name: 'Button Secondary',
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  argTypes: { ...ButtonPrimary.argTypes },
}

export const ButtonTertiary: StoryObj<typeof Button> = {
  name: 'Button Tertiary',
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
  argTypes: { ...ButtonPrimary.argTypes },
}
