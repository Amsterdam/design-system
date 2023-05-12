/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

// import { Link } from '@amsterdam/design-system-react/src'

import type { Meta, StoryObj } from '@storybook/react'
import { Link } from '@utrecht/component-library-react'

import '@amsterdam/design-system-css/src/link/utrecht_link.scss'

const meta = {
  title: 'Utrecht Link',
  id: 'utrecht-link',
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
    'aria-current': {
      name: 'aria-current',
      type: { name: 'string', required: false },
      options: [undefined, 'page', 'step', 'location', 'date', 'time', 'true', 'false'],
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 'false' },
      },
    },
    hrefLang: {
      name: 'hrefLang',
      type: { name: 'string', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
    lang: {
      name: 'lang',
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
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta

export const Default: StoryObj<typeof Link> = {
  name: 'Default',
}

export const External: StoryObj<typeof Link> = {
  args: {
    children: 'Watch video on YouTube',
    href: 'https://www.example.com',
    external: true,
  },
}

export const Placeholder: StoryObj<typeof Link> = {
  args: {
    children: 'Step 5: Review your submission',
    href: 'https://www.example.com',
    placeholder: true,
  },
}

export const Email: StoryObj<typeof Link> = {
  args: {
    href: 'mailto:info@example.com',
    children: 'info@example.com',
  },
}

export const Telephone: StoryObj<typeof Link> = {
  args: {
    href: 'tel:+31555385385',
    children: '+31 555 385 385',
  },
}

// TODO talen?
// export const AlternateLanguage: StoryObj<typeof Link> = {
//   args: {
//     href: 'https://example.com/en',
//     title: 'This page in English',
//     hrefLang: 'en',
//     lang: 'en',
//     rel: 'alternate',
//     children: 'EN',
//   },
// }

// export const CurrentLanguage: StoryObj<typeof Link> = {
//   args: {
//     href: 'https://example.com/en',
//     title: 'This page in English',
//     hrefLang: 'en',
//     lang: 'en',
//     children: 'EN',
//     'aria-current': 'page',
//   },
// }
