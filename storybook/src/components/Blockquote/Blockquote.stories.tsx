/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from '@amsterdam/design-system-react/src'

import { inverseColorArgType } from '#storybook/_common/argTypes'
import { exampleQuote } from '#storybook/_common/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Text/Blockquote',
  component: Blockquote,
  args: {
    children: quote,
  },
  argTypes: {
    children: {
      description: 'The text for the quote.',
      table: { disable: false },
    },
    color: inverseColorArgType,
  },
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
