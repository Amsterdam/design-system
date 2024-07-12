/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { CharacterCount } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Character Count',
  component: CharacterCount,
  args: {
    length: 7,
    maxLength: 10,
  },
} satisfies Meta<typeof CharacterCount>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Error: Story = {
  args: {
    length: 1001,
    maxLength: 1000,
  },
}
