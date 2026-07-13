/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CharacterCount } from '@amsterdam/design-system-react/src'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Forms/Character Count',
  component: CharacterCount,
  args: {
    length: 7,
    maxLength: 10,
  },
  argTypes: {
    length: {
      control: { min: 0, type: 'number' },
    },
    maxLength: {
      control: { min: 0, type: 'number' },
    },
  },
  decorators: [maximiseInlineSize('7-of-12-columns')],
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
