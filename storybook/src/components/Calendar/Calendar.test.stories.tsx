/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'
import { vi } from '@storybook/test'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as calendarMeta } from './Calendar.stories'

const meta = {
  ...calendarMeta,
  title: 'Components/Navigation/Calendar',
  argTypes: {
    ...calendarMeta.argTypes,
    locale: { control: false, table: { disable: true } },
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    defaultMonth: new Date(2026, 11, 31),
    locale: 'nl',
  },
  beforeEach: () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 11, 31))
    return () => vi.useRealTimers()
  },
  render: (args, context) => renderComponentVariants(Calendar, { args }, context),
  tags: ['!dev', '!autodocs'],
}
