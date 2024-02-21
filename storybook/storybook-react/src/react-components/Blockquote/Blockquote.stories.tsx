/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Blockquote } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'React Components/Text/Blockquote',
  component: Blockquote,
  args: {
    children: quote,
    inverseColor: false,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
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
