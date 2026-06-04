/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as datePickerMeta } from './DatePicker.stories'

const meta = {
  ...datePickerMeta,
  title: 'Components/Forms/Date Picker',
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    defaultMonth: new Date(2026, 2, 1),
    onChange: () => {},
    value: new Date(2026, 2, 14),
  },
  render: (args, context) => renderComponentVariants(DatePicker, { args }, context),
  tags: ['!dev', '!autodocs'],
}
