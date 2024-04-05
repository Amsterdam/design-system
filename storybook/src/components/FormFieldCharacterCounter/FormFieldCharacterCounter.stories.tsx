/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldCharacterCounter } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Field Character Counter',
  component: FormFieldCharacterCounter,
  args: {
    length: 7,
    maxLength: 10,
  },
} satisfies Meta<typeof FormFieldCharacterCounter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    length: 1001,
    maxLength: 1000,
  },
}
