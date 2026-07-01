/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { DatePickerProps, DateRange } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

import { localeArgTypes, localeSourceTransform, SyncDirFromLocale } from '#storybook/_common/locale'

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
    defaultMonth: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    dir: localeArgTypes.dir,
    isDateDisabled: { control: false }, // No usable Storybook control for function props.
    locale: localeArgTypes.locale,
    maxDate: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    minDate: { control: false }, // No usable Storybook control for Date objects; configured directly in each story.
    mode: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
    onChange: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
    value: { table: { disable: true } }, // Owned by the story's state wrapper; not a user-configurable control.
  },
  decorators: [SyncDirFromLocale],
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          (dir, locale) => [dir, locale, 'onChange={setValue}', 'value={value}'],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
  render: (args) => <SingleDatePicker {...args} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />,
}

export const Range: Story = {
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform(
          'DatePicker',
          (dir, locale) => [dir, locale, 'mode="range"', 'onChange={setValue}', 'value={value}'],
          'const [value, setValue] = useState<DateRange>({ start: null, end: null })',
        ),
      },
    },
  },
  render: (args) => <RangeDatePicker {...args} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />,
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
          (dir, locale) => [
            dir,
            'isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}',
            locale,
            'onChange={setValue}',
            'value={value}',
          ],
          'const [value, setValue] = useState<Date | null>(null)',
        ),
      },
    },
  },
  render: (args) => <SingleDatePicker {...args} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />,
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
          (dir, locale) => [
            'defaultMonth={new Date(2026, 2, 1)}',
            dir,
            locale,
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
    <SingleDatePicker {...args} defaultMonth={new Date(2026, 2, 1)} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />
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
          (dir, locale) => [
            'defaultMonth={new Date(2026, 2, 1)}',
            dir,
            locale,
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
    <SingleDatePicker {...args} defaultMonth={new Date(2026, 2, 1)} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />
  ),
}
