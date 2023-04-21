/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'

const meta = {
  title: 'Link',
  id: 'amsterdam-link',
  component: Link,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    children: 'Linktekst',
    href: 'http://localhost:6006/?active=none',
  },
} as Meta<typeof Link>

export default meta

export const Default: StoryObj<typeof Link> = {
  name: 'Default link',
}
