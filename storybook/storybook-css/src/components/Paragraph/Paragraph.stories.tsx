/* @license CC0-1.0 */

import { Paragraph } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

const meta = {
  title: 'CSS Components/Paragraph',
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
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
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
