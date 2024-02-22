/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { FormLabel } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Components/Forms/Form Label',
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
