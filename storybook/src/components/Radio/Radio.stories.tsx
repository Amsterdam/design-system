/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Radio } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Radio',
  component: Radio,
  args: {
    checked: false,
    children: 'Radio label',
    disabled: false,
    invalid: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    onChange: { action: 'clicked' },
  },
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
