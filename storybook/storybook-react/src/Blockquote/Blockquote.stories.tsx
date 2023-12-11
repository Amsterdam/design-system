/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleQuote } from '../shared/exampleContent'

const meta = {
  title: 'Text/Blockquote',
  component: Blockquote,
  args: {
    children: exampleQuote(),
    inverseColor: false,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: exampleQuote(),
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}

export const InvertedColor: Story = {
  args: {
    children: exampleQuote(),
    inverseColor: true,
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}
