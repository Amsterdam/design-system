/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link, Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'CSS Components/Link',
  id: 'css-link',
  component: Link,
  argTypes: {
    color: {
      control: { type: 'select', labels: { default: 'default', black: 'black', white: 'white' } },
      options: ['default', 'black', 'white'],
      table: {
        category: 'API',
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: { type: 'select', labels: { default: 'default', bold: 'bold', inline: 'inline' } },
      options: ['default', 'bold', 'inline'],
      table: {
        category: 'API',
        defaultValue: { summary: 'default' },
      },
    },
    external: {
      name: 'external',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    rel: {
      name: 'rel',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    target: {
      name: 'target',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    children: 'Linktekst',
    href: 'https://amsterdam.github.io/design-system',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta

export const Default: Story = {
  name: 'Default',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="https://amsterdam.github.io/design-system" class="utrecht-link amsterdam-link">Linktekst</a>',
      },
    },
  },
}

/**
 * Black link with an example yellow background
 */
export const Black: Story = {
  name: 'Black',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="https://amsterdam.github.io/design-system" class="utrecht-link amsterdam-link amsterdam-link--color-black">Linktekst</a>',
      },
    },
  },
  args: {
    color: 'black',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#FFE600', display: 'inline', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
}

/**
 * White link with an example blue background
 */
export const White: Story = {
  name: 'White',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="https://amsterdam.github.io/design-system" class="utrecht-link amsterdam-link amsterdam-link--color-white">Linktekst</a>',
      },
    },
  },
  args: {
    color: 'white',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#004699', display: 'inline', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Inline: Story = {
  name: 'Inline',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw <a href="https://amsterdam.github.io/design-system" class="utrecht-link amsterdam-link">typograaf</a> biedt mij zulke exquise schreven!</p>',
      },
    },
  },
  args: {
    children: 'typograaf',
    href: 'https://amsterdam.github.io/design-system',
    variant: 'inline',
  },
  decorators: [
    (Story) => (
      <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>
    ),
  ],
}
