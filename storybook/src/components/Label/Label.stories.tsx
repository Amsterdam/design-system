/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { Label } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Forms/Label',
  component: Label,
  args: {
    children: 'Label',
    hint: '',
    optional: false,
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

export const Optional: Story = {
  args: {
    optional: true,
  },
}

export const WithHint: Story = {
  args: {
    hint: 'not required',
  },
}

export const WithHeading: Story = {
  args: {
    children: <Heading level={1}>Label</Heading>,
  },
}
