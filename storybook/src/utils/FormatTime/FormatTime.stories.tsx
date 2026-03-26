/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Args, Meta, StoryObj } from '@storybook/react-vite'

import { formatTime, formatTimeRange, Paragraph } from '@amsterdam/design-system-react'

// The example instant on 1 January 2026, built from Amsterdam local time (winter, UTC+1),
// so the rendered time matches the controls in every viewer’s time zone.
const amsterdamTime = (hour: number, minute: number): Date => new Date(Date.UTC(2026, 0, 1, hour - 1, minute))

const meta = {
  title: 'Utilities/JavaScript/Format Time',
  args: {
    endHour: 17,
    endMinute: 0,
    hour: 14,
    minute: 30,
    style: 'digital',
  },
  argTypes: {
    endHour: {
      control: { max: 23, min: 0, type: 'number' },
      description: 'Hour of the end of the range.',
    },
    endMinute: {
      control: { max: 59, min: 0, type: 'number' },
      description: 'Minute of the end of the range.',
    },
    hour: {
      control: { max: 23, min: 0, type: 'number' },
      description: 'Hour of the time, and of the start of the range.',
    },
    minute: {
      control: { max: 59, min: 0, type: 'number' },
      description: 'Minute of the time, and of the start of the range.',
    },
    style: {
      control: { type: 'radio' },
      description: 'The notation to use.',
      options: ['digital', 'text'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Formats a time or time range in Dutch notation, according to the City of Amsterdam writing guidelines.',
      },
    },
  },
  render: ({ endHour, endMinute, hour, minute, style }: Args) => {
    const start = amsterdamTime(hour, minute)
    const end = amsterdamTime(endHour, endMinute)

    return (
      <div>
        <Paragraph>{formatTime(start, { style })}</Paragraph>
        <Paragraph>{formatTimeRange(start, end, { style })}</Paragraph>
      </div>
    )
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
