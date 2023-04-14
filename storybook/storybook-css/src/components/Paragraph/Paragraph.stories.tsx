/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph } from './Paragraph'

const meta = {
  title: 'CSS Component/Paragraph',
  id: 'css-paragraph',
  component: Paragraph,
  argTypes: {
    textContent: {
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'select', labels: { undefined: 'default', large: 'large', small: 'small' } },
      options: [undefined, 'large', 'small'],
    },
  },
  args: {
    textContent: 'Jouw typograaf biedt mij zulke exquise schreven!',
    size: undefined,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'amsterdam-paragraph',
    docs: {
      description: {
        // TODO import readme.md file
        component: '# Paragraph',
      },
    },
  },
} as Meta<typeof Paragraph>

export default meta

export const Default: StoryObj<typeof Paragraph> = {
  name: 'Default',
}

export const Large: StoryObj<typeof Paragraph> = {
  args: {
    size: 'large',
  },
  name: 'Large',
}

export const Small: StoryObj<typeof Paragraph> = {
  args: {
    size: 'small',
  },
  name: 'Small',
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Paragraph> = designTokenStory(meta)
