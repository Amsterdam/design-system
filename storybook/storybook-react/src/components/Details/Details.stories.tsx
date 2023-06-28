/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Details, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/details/details.scss'
import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Details',
  component: Details,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    headingLevel: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      table: {
        category: 'API',
      },
    },
    summary: {
      control: { type: 'text' },
      table: {
        category: 'API',
      },
    },
    open: {
      control: { type: 'boolean' },
      table: {
        category: 'HTML attribute',
      },
    },
  },
  args: {
    open: false,
  },
} satisfies Meta<typeof Details>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'Zichtbare titel',
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}

export const WithHeading: Story = {
  args: {
    summary: 'Zichtbare titel',
    headingLevel: 4,
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}

export const ExpandedByDefault: Story = {
  args: {
    summary: 'Zichtbare titel',
    open: true,
    children: <Paragraph>Jouw typograaf biedt mij zulke exquise schreven!</Paragraph>,
  },
}
