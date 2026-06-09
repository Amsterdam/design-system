/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from '@amsterdam/design-system-react/src'

import { default as datePickerMeta } from './DatePicker.stories'

const march2026 = new Date(2026, 2, 1)
const noop = () => {}

const meta = {
  ...datePickerMeta,
  title: 'Components/Forms/Date Picker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-grid">
      <DatePicker defaultMonth={march2026} onChange={noop} value={null} />
      <DatePicker defaultMonth={march2026} onChange={noop} value={new Date(2026, 2, 14)} />
      <DatePicker
        defaultMonth={march2026}
        mode="range"
        onChange={noop}
        value={{ start: new Date(2026, 2, 10), end: new Date(2026, 2, 16) }}
      />
      <DatePicker
        defaultMonth={march2026}
        isDateDisabled={(date) => date.getDay() === 0 || date.getDay() === 6}
        onChange={noop}
        value={null}
      />
      <DatePicker
        defaultMonth={march2026}
        maxDate={new Date(2026, 2, 20)}
        minDate={new Date(2026, 2, 5)}
        onChange={noop}
        value={null}
      />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
