/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldCharacterCount } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Field Character Count',
  component: FormFieldCharacterCount,
  args: {
    length: 7,
    maxLength: 10,
  },
} satisfies Meta<typeof FormFieldCharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    length: 1001,
    maxLength: 1000,
  },
}
