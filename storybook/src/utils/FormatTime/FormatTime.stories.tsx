/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Args, Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { formatTime } from '@amsterdam/design-system-react'

const meta = {
  title: 'Utilities/JavaScript/Format Time',
  args: {
    hour: 14,
    minute: 30,
    untilHour: 15,
    untilMinute: 0,
  },
  argTypes: {
    hour: {
      control: { max: 23, min: 0, type: 'number' },
    },
    minute: {
      control: { max: 59, min: 0, type: 'number' },
    },
    untilHour: {
      control: { max: 23, min: 0, type: 'number' },
    },
    untilMinute: {
      control: { max: 59, min: 0, type: 'number' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Formats a time or time range in Dutch notation, according to the City's writing guidelines.",
      },
    },
  },
  render: ({ hour, minute, untilHour, untilMinute }: Args) => {
    const date = new Date(2026, 0, 1, hour, minute)
    const until = new Date(2026, 0, 1, untilHour, untilMinute)

    return (
      <div>
        <Paragraph>{formatTime(date)}</Paragraph>
        <Paragraph>{formatTime(date, until)}</Paragraph>
      </div>
    )
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
