/* @license CC0-1.0 */

import { Paragraph } from '@amsterdam/design-system-react/src'
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
} as Meta<typeof Paragraph>

export default meta

export const Default: StoryObj<typeof Paragraph> = {
  name: 'Default',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>',
      },
    },
  },
}

export const Large: StoryObj<typeof Paragraph> = {
  name: 'Large',
  args: {
    size: 'large',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph amsterdam-paragraph-large">Jouw typograaf biedt mij zulke exquise schreven!</p>',
      },
    },
  },
}

export const Small: StoryObj<typeof Paragraph> = {
  name: 'Small',
  args: {
    size: 'small',
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph amsterdam-paragraph-small">Jouw typograaf biedt mij zulke exquise schreven!</p>',
      },
    },
  },
}
