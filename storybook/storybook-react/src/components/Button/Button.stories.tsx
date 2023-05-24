/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { Meta } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

export default {
  title: 'Button',
  id: 'button',
  component: Button,
  args: {
    children: 'Default',
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export const Primary = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
}

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const Tertiary = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
}
