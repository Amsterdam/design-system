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
  title: 'Link',
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
        labels: { standalone: 'standalone', inline: 'inline', inList: 'inList' },
      },
      options: ['standalone', 'inline', 'inList'],
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
    href: '#',
  },
} satisfies Meta<typeof Link>

export default meta

export const Standalone: Story = {
  args: {
    onBackground: undefined, // Workaround to avoid 'onBackground' being set to an empty function
  },
}

export const Inline: Story = {
  args: {
    children: 'typograaf',
    href: '#',
    variant: 'inline',
    onBackground: undefined,
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
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined,
  },
}

export const onDarkBackground: Story = {
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
