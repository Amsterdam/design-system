/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DatePickerProps, DateRange } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

type ControlledProps = Omit<DatePickerProps, 'mode' | 'onChange' | 'value'>

const SingleDatePicker = (props: ControlledProps) => {
  const [value, setValue] = useState<Date | null>(null)

  return <DatePicker {...props} onChange={setValue} value={value} />
}

const RangeDatePicker = (props: ControlledProps) => {
  const [value, setValue] = useState<DateRange>({ start: null, end: null })

  return <DatePicker {...props} mode="range" onChange={setValue} value={value} />
}

const meta = {
  title: 'Components/Forms/Date Picker',
  component: DatePicker,
  args: {
    // The stories control the value with state; these satisfy the required props.
    onChange: () => {},
    value: null,
  },
  argTypes: {
    locale: {
      // Hidden until we offer complete localisation examples.
      table: { disable: true },
    },
    // The story wrappers own the mode and value, so these are not editable controls.
    mode: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    value: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <SingleDatePicker {...args} />,
}

export const Range: Story = {
  render: (args) => <RangeDatePicker {...args} />,
}

export const DisabledDates: Story = {
  args: {
    isDateDisabled: (date) => date.getDay() === 0 || date.getDay() === 6,
  },
  render: (args) => <SingleDatePicker {...args} />,
}

export const LimitedToOneMonth: Story = {
  args: {
    maxDate: new Date(2026, 2, 31),
    minDate: new Date(2026, 2, 1),
  },
  render: (args) => <SingleDatePicker {...args} defaultMonth={new Date(2026, 2, 1)} />,
}
