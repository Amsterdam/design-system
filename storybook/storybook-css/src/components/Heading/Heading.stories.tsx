/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/heading/heading.scss'

const meta = {
  title: 'CSS Components/Heading',
  component: Heading,
  argTypes: {
    level: {
      table: {
        disable: true,
      },
    },
    styleLevel: {
      options: [1, 2, 3, 4],
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
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h1 class="amsterdam-heading amsterdam-heading-1">Jouw typograaf biedt mij zulke exquise schreven!</h1>',
      },
    },
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    styleLevel: 2,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h2 class="amsterdam-heading amsterdam-heading-2">Jouw typograaf biedt mij zulke exquise schreven!</h2>',
      },
    },
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
    styleLevel: 3,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h3 class="amsterdam-heading amsterdam-heading-3">Jouw typograaf biedt mij zulke exquise schreven!</h3>',
      },
    },
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
    styleLevel: 4,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h4 class="amsterdam-heading amsterdam-heading-4">Jouw typograaf biedt mij zulke exquise schreven!</h4>',
      },
    },
  },
}
