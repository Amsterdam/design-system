/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldCharacterCounter } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Field Character Counter',
  component: FormFieldCharacterCounter,
  args: {
    length: 0,
    maxLength: 1000,
  },
} satisfies Meta<typeof FormFieldCharacterCounter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
