/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const meta = {
  title: 'Text/Paragraph',
  component: Paragraph,
  args: {
    inverseColor: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        labels: { undefined: 'default', large: 'large', small: 'small' },
      },
      options: [undefined, 'large', 'small'],
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: exampleParagraph(),
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}

export const Large: Story = {
  args: {
    children: exampleParagraph(),
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    children: exampleParagraph(),
    size: 'small',
  },
}

export const InvertedColor: Story = {
  args: {
    children: exampleParagraph(),
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
