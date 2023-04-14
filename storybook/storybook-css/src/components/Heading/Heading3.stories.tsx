/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Heading3 } from './Heading3'

const meta = {
  title: 'CSS Component/Heading/Heading 3',
  id: 'css-heading-3',
  component: Heading3,
  argTypes: {
    textContent: {
      table: {
        type: { summary: 'string' },
      },
    },
    level: {
      table: {
        disable: true,
      },
    },
    styleLevel: {
      options: [1, 2, 3, 4, 5, 6],
      control: 'select',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
  },
  args: {
    textContent: 'Jouw typograaf biedt mij zulke exquise schreven!',
    level: 3,
    styleLevel: 3,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'amsterdam-heading-3',
    docs: {
      description: {
        // TODO import readme.md file
        component: '# Heading 3',
      },
    },
  },
} as Meta<typeof Heading3>

export default meta

export const Default: StoryObj<typeof Heading3> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  name: 'Heading 3',
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Heading3> = designTokenStory(meta)
