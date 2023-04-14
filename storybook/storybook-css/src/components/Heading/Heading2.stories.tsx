/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Heading2 } from './Heading2'

const meta = {
  title: 'CSS Component/Heading/Heading 2',
  id: 'css-heading-2',
  component: Heading2,
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
    level: 2,
    styleLevel: 2,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'amsterdam-heading-2',
    docs: {
      description: {
        // TODO import readme.md file
        component: '# Heading 2',
      },
    },
  },
} as Meta<typeof Heading2>

export default meta

export const Default: StoryObj<typeof Heading2> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  name: 'Heading 2',
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Heading2> = designTokenStory(meta)
