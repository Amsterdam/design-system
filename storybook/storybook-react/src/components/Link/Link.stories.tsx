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
    href: '#',
  },
} satisfies Meta<typeof Link>

export default meta

export const Standalone: Story = {
  name: 'Standalone',
}

export const StandaloneBold: Story = {
  name: 'Standalone Bold',
  args: {
    variant: 'standaloneBold',
    onBackground: undefined,
  },
}

/**
 * Link to use on a dark background
 */
export const Dark: Story = {
  name: 'Dark',
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

// @todo update to list component
export const InList: Story = {
  name: 'InList',
  args: {
    children: 'Linktekst',
    href: '#',
    variant: 'inList',
    onBackground: undefined,
  },
  decorators: [(Story) => <Story />],
}
