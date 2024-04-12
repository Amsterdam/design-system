/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormLabel } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Label',
  component: FormLabel,
  args: {
    children: 'Form label',
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof FormLabel>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
