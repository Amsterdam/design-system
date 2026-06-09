/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'

// Format the local date as YYYY-MM-DD; `toISOString` would shift to UTC and could change the day.
const formatDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

const meta = {
  title: 'Components/Navigation/Calendar',
  component: Calendar,
  args: {
    linkTemplate: (date: Date): string | undefined => `?date=${formatDate(date)}`,
  },
  argTypes: {
    defaultMonth: {
      // Hidden as enabling the control breaks the story with an error.
      table: { disable: true },
    },
    linkComponent: {
      // Hidden as enabling the control breaks the story with an error.
      table: { disable: true },
    },
    linkTemplate: {
      // Hidden
      table: { disable: true },
    },
    locale: {
      // Hidden until we offer complete localisation examples.
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DatesWithoutLinks: Story = {
  args: {
    linkTemplate: (date: Date) =>
      date.getDay() === 0 || date.getDay() === 6 ? undefined : `?date=${formatDate(date)}`,
  },
}
