/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'

import { mockDate } from '#storybook/_common/mockDate'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

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

const testDate = new Date(2026, 11, 31)

export const Test: Story = {
  args: {
    defaultMonth: new Date(testDate),
    locale: 'nl',
  },
  beforeEach: () => mockDate(testDate),
  render: (args, context) => renderComponentVariants(Calendar, { args }, context),
  tags: ['!dev', '!autodocs'],
}
