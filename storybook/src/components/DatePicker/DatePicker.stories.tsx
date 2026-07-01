/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DatePickerProps, DateRange } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

import {
  datePickerLocaleArgTypes,
  datePickerLocaleProps,
  datePickerRangeLocaleArgTypes,
  localeSourceTransform,
  SyncLocaleArgs,
} from '#storybook/_common/locale'

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
    ...datePickerLocaleArgTypes,
    defaultMonth: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    isDateDisabled: { control: false }, // No usable Storybook control for function props.
    maxDate: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    minDate: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    mode: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
    onChange: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
    value: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
  },
  decorators: [SyncLocaleArgs],
  parameters: { localeVariant: 'datePicker' },
  // Apply the locale labels and direction synchronously for an instant visual response; SyncLocaleArgs mirrors them into the controls panel through the async channel of Storybook.
  render: (args) => <SingleDatePicker {...args} {...datePickerLocaleProps(args.locale)} />,
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          'datePicker',
          ['onChange={setValue}', 'value={value}'],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
}

export const Range: Story = {
  argTypes: datePickerRangeLocaleArgTypes,
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          'datePickerRange',
          ['mode="range"', 'onChange={setValue}', 'value={value}'],
          'const [value, setValue] = useState<DateRange>({ start: null, end: null })',
        ),
      },
    },
    localeVariant: 'datePickerRange',
  },
  render: (args) => <RangeDatePicker {...args} {...datePickerLocaleProps(args.locale, true)} />,
}

export const DisabledDates: Story = {
  args: {
    isDateDisabled: (date) => date.getDay() === 0 || date.getDay() === 6,
  },
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          'datePicker',
          [
            'isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}',
            'onChange={setValue}',
            'value={value}',
          ],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
}

export const WithinMonthBounds: Story = {
  args: {
    maxDate: new Date(2026, 2, 20),
    minDate: new Date(2026, 2, 10),
  },
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          'datePicker',
          [
            'defaultMonth={new Date(2026, 2, 1)}',
            'maxDate={new Date(2026, 2, 20)}',
            'minDate={new Date(2026, 2, 10)}',
            'onChange={setValue}',
            'value={value}',
          ],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
  render: (args) => (
    <SingleDatePicker {...args} {...datePickerLocaleProps(args.locale)} defaultMonth={new Date(2026, 2, 1)} />
  ),
}

export const LimitedToOneMonth: Story = {
  args: {
    maxDate: new Date(2026, 2, 31),
    minDate: new Date(2026, 2, 1),
  },
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          'datePicker',
          [
            'defaultMonth={new Date(2026, 2, 1)}',
            'maxDate={new Date(2026, 2, 31)}',
            'minDate={new Date(2026, 2, 1)}',
            'onChange={setValue}',
            'value={value}',
          ],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
  render: (args) => (
    <SingleDatePicker {...args} {...datePickerLocaleProps(args.locale)} defaultMonth={new Date(2026, 2, 1)} />
  ),
}
