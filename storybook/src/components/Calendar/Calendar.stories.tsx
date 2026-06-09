/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes } from 'react'

import { Calendar } from '@amsterdam/design-system-react/src'

// Format the local date as YYYY-MM-DD; `toISOString` would shift to UTC and could change the day.
const formatDate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

// Prevent Storybook from navigating away when a date link is clicked.
const PreventNavigationLink = ({ onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    {...props}
    onClick={(event) => {
      event.preventDefault()
      onClick?.(event)
    }}
  />
)

const meta = {
  title: 'Components/Navigation/Calendar',
  component: Calendar,
  args: {
    linkComponent: PreventNavigationLink,
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
      // Hidden as Storybook doesn’t offer UI for a function that returns a string or undefined.
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
