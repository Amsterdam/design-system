/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormFieldCharacterCounter } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Form Field Character Counter',
  component: FormFieldCharacterCounter,
  args: {
    label: '0 van 1000 tekens',
  },
} satisfies Meta<typeof FormFieldCharacterCounter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
