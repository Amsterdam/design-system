/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Calendar',
  component: Calendar,
  args: {
    linkTemplate: (date: Date): string | undefined => `?date=${date.toISOString().slice(0, 10)}`,
  },
  argTypes: {
    locale: {
      // Hidden until we offer complete localisation examples.
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WeekendsWithoutLinks: Story = {
  args: {
    linkTemplate: (date: Date) =>
      date.getDay() === 0 || date.getDay() === 6 ? undefined : `?date=${date.toISOString().slice(0, 10)}`,
  },
}
