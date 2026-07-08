/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'

import { calendarLocaleProps, localeTranslations } from '#storybook/_common/locale'
import { mockDate } from '#storybook/_common/mockDate'

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

// One fully localised Calendar per supported locale, so Chromatic captures the translated weekday
// and month names for every language and the right-to-left layout for Arabic. `calendarLocaleProps`
// applies the derived direction and labels; `locale` drives the `Intl`-formatted dates.
export const Test: Story = {
  args: {
    defaultMonth: new Date(testDate),
  },
  beforeEach: () => mockDate(testDate),
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-l)' }}>
      {localeTranslations.map(({ locale }) => (
        <Calendar key={locale ?? 'nl-NL'} {...args} {...calendarLocaleProps(locale)} locale={locale} />
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
