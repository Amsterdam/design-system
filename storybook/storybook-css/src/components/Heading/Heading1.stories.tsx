/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Heading1 } from './Heading1'

const meta = {
  title: 'CSS Component/Heading/Heading 1',
  id: 'css-heading-1',
  component: Heading1,
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
    level: 1,
    styleLevel: 1,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'amsterdam-heading-1',
    docs: {
      description: {
        // TODO import readme.md file
        component: '# Heading 1',
      },
    },
  },
} as Meta<typeof Heading1>

export default meta

export const Default: StoryObj<typeof Heading1> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  name: 'Heading 1',
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Heading1> = designTokenStory(meta)
