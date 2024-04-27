/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Blockquote } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { inverseColorDecorator } from '../shared/decorators'
import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Text/Blockquote',
  component: Blockquote,
  args: {
    children: quote,
    inverseColor: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
  decorators: [inverseColorDecorator],
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
}
