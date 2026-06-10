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
    defaultMonth: { control: false }, // Enabling the control breaks the story with an error.
    linkComponent: { control: false }, // Enabling the control breaks the story with an error.
    linkTemplate: { control: false }, // A function returning string or undefined has no usable controls panel widget.
    locale: { control: false }, // Shown for reference only; localisation examples to follow.
  },
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Calendar linkTemplate={(date: Date): string | undefined => \`?date=\${formatDate(date)}\`} />`,
      },
    },
  },
}

export const DatesWithoutLinks: Story = {
  args: {
    linkTemplate: (date: Date) =>
      date.getDay() === 0 || date.getDay() === 6 ? undefined : `?date=${formatDate(date)}`,
  },
  parameters: {
    docs: {
      source: {
        code: `<Calendar
  linkTemplate={(date: Date) =>
    date.getDay() === 0 || date.getDay() === 6 ? undefined : \`?date=\${formatDate(date)}\`
  }
/>`,
      },
    },
  },
}
