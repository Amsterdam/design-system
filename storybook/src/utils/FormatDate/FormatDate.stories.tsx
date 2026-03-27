/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Args, Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { formatDate } from '@amsterdam/design-system-react'

const today = new Date()

const meta = {
  title: 'Utilities/JavaScript/Format Date',
  args: {
    day: today.getDate(),
    month: today.getMonth() + 1,
    weekday: false,
    year: today.getFullYear(),
  },
  argTypes: {
    day: {
      control: { max: 31, min: 1, type: 'number' },
    },
    month: {
      control: { max: 12, min: 1, type: 'number' },
    },
    weekday: {
      control: { type: 'boolean' },
    },
    year: {
      control: { type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Formats a date in Dutch long-form notation (e.g. '1 mei 2026'), according to the City's writing guidelines.",
      },
    },
  },
  render: ({ day, month, weekday, year }: Args) => (
    <Paragraph>{formatDate(new Date(year, month - 1, day), { weekday })}</Paragraph>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
