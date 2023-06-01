/* @license CC0-1.0 */

import { Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

const meta = {
  title: 'CSS Components/Paragraph',
  component: Paragraph,
  argTypes: {
    children: {
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
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw typograaf biedt mij zulke exquise schreven!</p>',
      },
    },
  },
}

export const Large: Story = {
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

export const Small: Story = {
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
