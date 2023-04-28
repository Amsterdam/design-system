/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react/src'
import { Meta } from '@storybook/react'

import '@amsterdam/design-system-css/src/heading/heading.scss'

export default {
  title: 'Heading',
  id: 'heading',
  component: Heading,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
    level: 1,
    styleLevel: 1,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export const Heading1 = {
  name: 'Heading 1',
}

export const Heading2 = {
  args: {
    level: 2,
    styleLevel: 2,
  },
}

export const Heading3 = {
  args: {
    level: 3,
    styleLevel: 3,
  },
}

export const Heading4 = {
  args: {
    level: 4,
    styleLevel: 4,
  },
}

export const Heading5 = {
  args: {
    level: 5,
    styleLevel: 5,
  },
}

export const Heading6 = {
  args: {
    level: 6,
    styleLevel: 6,
  },
}
