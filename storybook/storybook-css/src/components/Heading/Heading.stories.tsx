/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta = {
  title: 'CSS Component/Heading',
  id: 'css-heading-1',
  component: Heading,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
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
    level: 1,
    styleLevel: 1,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'amsterdam-heading',
    docs: {
      description: {
        // TODO import readme.md file
        component: 'Heading',
      },
    },
  },
} as Meta<typeof Heading>

export default meta

export const Heading1: StoryObj<typeof Heading> = {
  name: 'Heading 1',
  args: {
    textContent: 'Heading 1',
  },
}

export const Heading2: StoryObj<typeof Heading> = {
  name: 'Heading 2',
  args: {
    level: 2,
    styleLevel: 2,
    textContent: 'Heading 2',
  },
}

export const Heading3: StoryObj<typeof Heading> = {
  name: 'Heading 3',
  args: {
    level: 3,
    styleLevel: 3,
    textContent: 'Heading 3',
  },
}

export const Heading4: StoryObj<typeof Heading> = {
  name: 'Heading 4',
  args: {
    level: 4,
    styleLevel: 4,
    textContent: 'Heading 4',
  },
}

// TODO: add design tokens
// export const DesignTokens: StoryObj<typeof Heading> = designTokenStory(meta)
