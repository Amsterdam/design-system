/* @license CC0-1.0 */

import { Heading } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import '@amsterdam/design-system-css/src/heading/heading.scss'

const meta = {
  title: 'CSS Components/Heading',
  id: 'css-heading',
  component: Heading,
  argTypes: {
    level: {
      table: {
        disable: true,
      },
    },
    styleLevel: {
      options: [1, 2, 3, 4, 5, 6],
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
  tags: ['autodocs'],
} as Meta<typeof Heading>

export default meta

/**
 * Primary Heading used for page titles
 */
export const Heading1: StoryObj<typeof Heading> = {
  name: 'Heading 1',
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h1 class="amsterdam-heading amsterdam-heading-1">Jouw typograaf biedt mij zulke exquise schreven!</h1>',
      },
    },
  },
}

/**
 * Secondary Heading used for section titles
 */
export const Heading2: StoryObj<typeof Heading> = {
  name: 'Heading 2',
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

/**
 * Tertiary Heading used for subsection titles
 */
export const Heading3: StoryObj<typeof Heading> = {
  name: 'Heading 3',
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

/**
 * Quaternary Heading used for subsubsection titles
 */
export const Heading4: StoryObj<typeof Heading> = {
  name: 'Heading 4',
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

/**
 * Quinary Heading used for subsubsubsection titles
 */
export const Heading5: StoryObj<typeof Heading> = {
  name: 'Heading 5',
  args: {
    level: 5,
    styleLevel: 5,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h5 class="amsterdam-heading amsterdam-heading-5">Jouw typograaf biedt mij zulke exquise schreven!</h5>',
      },
    },
  },
}

/**
 * Senary Heading used for subsubsubsubsection titles
 */
export const Heading6: StoryObj<typeof Heading> = {
  name: 'Heading 6',
  args: {
    level: 6,
    styleLevel: 6,
  },
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: '<h6 class="amsterdam-heading amsterdam-heading-6">Jouw typograaf biedt mij zulke exquise schreven!</h6>',
      },
    },
  },
}
