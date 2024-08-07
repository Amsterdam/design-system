/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Label } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Label',
  component: Label,
  args: {
    children: 'Label',
    notRequiredLabel: 'niet verplicht',
    required: undefined,
  },
  argTypes: {
    children: {
      description: 'The text content.',
      table: { disable: false },
    },
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
