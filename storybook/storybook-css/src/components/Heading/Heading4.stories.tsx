/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Heading4 } from './Heading4'

const meta = {
  title: 'CSS Component/Heading/Heading 4',
  id: 'css-heading-4',
  component: Heading4,
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
    tokensPrefix: 'amsterdam-heading-4',
    docs: {
      description: {
        // TODO import readme.md file
        component: '# Heading 4',
      },
    },
  },
} as Meta<typeof Heading4>

export default meta

export const Default: StoryObj<typeof Heading4> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  name: 'Heading 4',
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Heading3> = designTokenStory(meta)
