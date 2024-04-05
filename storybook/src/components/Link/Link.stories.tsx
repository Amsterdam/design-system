/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Link, Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'Link label',
    href: '#',
    onBackground: undefined, // Workaround to avoid 'onBackground' being set to an empty function
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
    onBackground: {
      control: {
        type: 'radio',
        labels: { undefined: 'default', light: 'light', dark: 'dark' },
      },
      options: [undefined, 'light', 'dark'],
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
} satisfies Meta<typeof Link>

export default meta

export const Default: Story = {}

export const Standalone: Story = {}

export const Inline: Story = {
  args: {
    children: 'typograaf',
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
