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
    defaultMonth: {
      // Hidden as a Date control is awkward and can break the story.
      table: { disable: true },
    },
    isDateDisabled: {
      // Hidden as a function prop has no usable control.
      table: { disable: true },
    },
    locale: {
      // Hidden until we offer complete localisation examples.
      table: { disable: true },
    },
    maxDate: {
      // Hidden as a Date control is awkward and can break the story.
      table: { disable: true },
    },
    minDate: {
      // Hidden as a Date control is awkward and can break the story.
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
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState<Date | null>(null)

<DatePicker onChange={setValue} value={value} />`,
        language: 'tsx',
      },
    },
  },
  render: (args) => <SingleDatePicker {...args} />,
}

export const Range: Story = {
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState<DateRange>({ start: null, end: null })

<DatePicker mode="range" onChange={setValue} value={value} />`,
        language: 'tsx',
      },
    },
  },
  render: (args) => <RangeDatePicker {...args} />,
}

export const DisabledDates: Story = {
  args: {
    isDateDisabled: (date) => date.getDay() === 0 || date.getDay() === 6,
  },
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState<Date | null>(null)

<DatePicker
  isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}
  onChange={setValue}
  value={value}
/>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => <SingleDatePicker {...args} />,
}

export const LimitedToOneMonth: Story = {
  args: {
    maxDate: new Date(2026, 2, 31),
    minDate: new Date(2026, 2, 1),
  },
  parameters: {
    docs: {
      source: {
        code: `const [value, setValue] = useState<Date | null>(null)

<DatePicker
  defaultMonth={new Date(2026, 2, 1)}
  maxDate={new Date(2026, 2, 31)}
  minDate={new Date(2026, 2, 1)}
  onChange={setValue}
  value={value}
/>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => <SingleDatePicker {...args} defaultMonth={new Date(2026, 2, 1)} />,
}
