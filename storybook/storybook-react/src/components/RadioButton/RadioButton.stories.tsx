/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { RadioButton } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/radio-button/radio-button.scss'

const meta = {
  title: 'Radio Button',
  component: RadioButton,
  args: {
    checked: false,
    invalid: false,
    disabled: false,
    onChange: () => {
      console.log('onChange')
    },
  },
} satisfies Meta<typeof RadioButton>

export default meta

type Story = StoryObj<typeof meta>

export const RadioButtonStory: Story = {
  name: 'Radio Button',
}
