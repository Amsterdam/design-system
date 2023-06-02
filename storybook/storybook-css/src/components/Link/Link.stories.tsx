/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link, Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/index.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'CSS Components/Link',
  id: 'link',
  component: Link,
  argTypes: {
    onBackground: {
      control: { type: 'select', labels: { default: 'default', light: 'light', dark: 'dark' } },
      options: ['default', 'light', 'dark'],
      table: {
        category: 'API',
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: {
        type: 'select',
        labels: { standalone: 'standalone', standaloneBold: 'standaloneBold', inline: 'inline', inList: 'inList' },
      },
      options: ['standalone', 'standaloneBold', 'inline', 'inList'],
      table: {
        category: 'API',
        defaultValue: { summary: 'default' },
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
  },
  args: {
    children: 'Linktekst',
    href: 'https://amsterdam.github.io/design-system',
  },
} satisfies Meta<typeof Link>

export default meta

export const Standalone: Story = {
  name: 'Standalone',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="utrecht-link amsterdam-link">Linktekst</a>',
      },
    },
  },
}

export const StandaloneBold: Story = {
  name: 'Standalone Bold',
  args: {
    variant: 'standaloneBold',
  },
}

/**
 * Link to use on a dark background
 */
export const Dark: Story = {
  name: 'Dark',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="utrecht-link amsterdam-link amsterdam-link--backgorund-color-dark">Linktekst</a>',
      },
    },
  },
  args: {
    onBackground: 'dark',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#004699', display: 'inline', padding: '16px' }}>
        <Story />
      </div>
    ),
  ],
}

/**
 * Link to use on a light background
 */
export const Light: Story = {
  name: 'Light',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="utrecht-link amsterdam-link amsterdam-link--color-white">Linktekst</a>',
      },
    },
  },
  args: {
    onBackground: 'light',
  },
  decorators: [
    (Story) => (
      <div style={{ background: '#FFE600', display: 'inline', padding: '16px' }}>
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
        code: '<p class="amsterdam-paragraph">Jouw <a href="#" class="utrecht-link amsterdam-link">typograaf</a> biedt mij zulke exquise schreven!</p>',
      },
    },
  },
  args: {
    children: 'typograaf',
    href: '#',
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

// @todo update to list component
export const InList: Story = {
  name: 'InList',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<ul>
  <li><a href="#" class="amsterdam-link amsterdam-link--inline">Linktekst</a></li>
  <li><a href="#" class="amsterdam-link amsterdam-link--inline">Linktekst</a></li>
  <li><a href="#" class="amsterdam-link amsterdam-link--inline">Linktekst</a></li>
</ul>
        `,
      },
    },
  },
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inline',
  },
  decorators: [
    (Story) => (
      <ul>
        <li>
          <Story />
        </li>
        <li>
          <Story />
        </li>
        <li>
          <Story />
        </li>
      </ul>
    ),
  ],
}
