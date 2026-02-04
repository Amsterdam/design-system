/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DateRange } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

const meta = {
  title: 'Components/Forms/Calendar',
  component: Calendar,
  args: {},
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { mode: 'single', onChange: () => {}, value: null },
  render: function SingleCalendar() {
    const [value, setValue] = useState<Date | null>(null)

    return <Calendar mode="single" onChange={setValue} value={value} />
  },
}

export const Range: Story = {
  args: { mode: 'range', onChange: () => {}, value: { start: null, end: null } },
  render: function RangeCalendar() {
    const [value, setValue] = useState<DateRange>({ start: null, end: null })

    return <Calendar mode="range" onChange={setValue} value={value} />
  },
}

export const WithLinks: Story = {
  args: {
    linkTemplate: (date) => `?date=${date.toISOString().slice(0, 10)}`,
    mode: 'link',
  },
}
