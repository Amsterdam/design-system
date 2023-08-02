/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link, Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'CSS Components/Link',
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
        defaultValue: { summary: 'standalone' },
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
    href: '',
  },
} satisfies Meta<typeof Link>

export default meta

export const Standalone: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link">Linktekst</a>',
      },
    },
  },
}

export const StandaloneBold: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--standalone-bold">Linktekst</a>',
      },
    },
  },
  args: {
    variant: 'standaloneBold',
  },
}

export const Inline: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<p class="amsterdam-paragraph">Jouw <a href="#" class="amsterdam-link amsterdam-link--inline">typograaf</a> biedt mij zulke exquise schreven!</p>',
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

export const InList: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `
<a href="#" class="amsterdam-link amsterdam-link--in-list">
  <span class="amsterdam-icon amsterdam-icon--size-6">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path fill-rule="evenodd" d="m9.757 32-2.9-2.91L19.937 16 6.857 2.91 9.757 0l16 16z"></path>
    </svg>
  </span>
  Linktekst
</a>
        `,
      },
    },
  },
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
  },
}

export const onDarkBackground: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--on-background-dark">Linktekst</a>',
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

export const onLightBackground: Story = {
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="#" class="amsterdam-link amsterdam-link--on-background-light">Linktekst</a>',
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
