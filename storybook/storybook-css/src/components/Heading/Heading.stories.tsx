/* @license CC0-1.0 */

import { Heading } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/heading/heading.scss'

const meta = {
  title: 'CSS Components/Heading',
  id: 'css-heading',
  component: Heading,
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
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
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
      canvas: { sourceState: 'open' },
      source: { type: 'dynamic' },
    },
  },
} as Meta<typeof Heading>

export default meta

export const Heading1: StoryObj<typeof Heading> = {
  name: 'Heading 1',
}

export const Heading2: StoryObj<typeof Heading> = {
  name: 'Heading 2',
  args: {
    level: 2,
    styleLevel: 2,
  },
}

export const Heading3: StoryObj<typeof Heading> = {
  name: 'Heading 3',
  args: {
    level: 3,
    styleLevel: 3,
  },
}

export const Heading4: StoryObj<typeof Heading> = {
  name: 'Heading 4',
  args: {
    level: 4,
    styleLevel: 4,
  },
}

export const Heading5: StoryObj<typeof Heading> = {
  name: 'Heading 5',
  args: {
    level: 5,
    styleLevel: 5,
  },
}

export const Heading6: StoryObj<typeof Heading> = {
  name: 'Heading 6',
  args: {
    level: 6,
    styleLevel: 6,
  },
}
