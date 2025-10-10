/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from '@amsterdam/design-system-react/src'

import { exampleQuote } from '../shared/exampleContent'

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
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
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
