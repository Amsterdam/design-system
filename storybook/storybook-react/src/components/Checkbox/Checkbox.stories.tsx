/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Checkbox } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: {
    disabled: false,
    indeterminate: false,
    invalid: false,
  },
  argTypes: { onChange: { action: 'clicked' } },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Werk en inkomen',
  },
}

export const LongLabel: Story = {
  args: {
    children:
      'Ik heb alle gegevens correct en volledig ingevuld. Ik begrijp dat een verhuizing via internet dezelfde juridische status heeft als een verhuizing met een geschreven geldige handtekening.',
  },
}
