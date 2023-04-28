/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/link/link.scss'

const meta = {
  title: 'CSS Components/Link',
  id: 'css-link',
  component: Link,
  argTypes: {
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

export const Default: StoryObj<typeof Link> = {
  name: 'Default',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<a href="https://amsterdam.github.io/design-system" class="utrecht-link">Linktekst</a>',
      },
    },
  },
}
