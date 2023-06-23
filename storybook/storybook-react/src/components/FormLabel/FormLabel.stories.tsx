/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { FormLabel } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/form-label/form-label.scss'

const meta = {
  title: 'Form label',
  component: FormLabel,
} satisfies Meta<typeof FormLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}
