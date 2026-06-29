/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { AnchorHTMLAttributes } from 'react'

import { Calendar } from '@amsterdam/design-system-react/src'
import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

import { localeSourceTransform } from '#storybook/_common/locale'

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
    dir: {
      control: {
        labels: { undefined: 'ltr (default)' },
        type: 'inline-radio',
      },
      description: 'Derived from `locale`; set to `rtl` automatically when Arabic is selected.',
      options: [undefined, 'rtl'],
      table: { readonly: true },
    },
    linkComponent: { control: false }, // Enabling the control breaks the story with an error.
    linkTemplate: { control: false }, // A function returning string or undefined has no usable controls panel widget.
    locale: {
      control: {
        labels: {
          'ar-MA': 'العربية (Arabic)',
          'de-DE': 'Deutsch (German)',
          'en-GB': 'English (English)',
          'fr-FR': 'Français (French)',
          'tr-TR': 'Türkçe (Turkish)',
          undefined: 'Nederlands (Dutch)',
        },
        type: 'select',
      },
      options: [undefined, 'en-GB', 'de-DE', 'fr-FR', 'tr-TR', 'ar-MA'],
    },
  },
  decorators: [
    (Story) => {
      const [{ dir, locale }, updateArgs] = useArgs()
      useEffect(() => {
        const derivedDir = locale === 'ar-MA' ? 'rtl' : undefined
        if (dir !== derivedDir) updateArgs({ dir: derivedDir })
      }, [locale]) // eslint-disable-line react-hooks/exhaustive-deps
      return <Story />
    },
  ],
  // `dir` is derived from `locale` here so the Calendar responds instantly.
  // The decorator above keeps args.dir in sync for the controls panel, but that
  // update travels through Storybook's async channel and arrives later.
  render: (args) => <Calendar {...args} dir={args.locale === 'ar-MA' ? 'rtl' : undefined} />,
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        transform: localeSourceTransform('Calendar', (dir, locale) => [
          dir,
          'linkTemplate={(date: Date): string | undefined => `?date=${formatDate(date)}`}',
          locale,
        ]),
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
        transform: localeSourceTransform('Calendar', (dir, locale) => [
          dir,
          'linkTemplate={(date: Date) =>\n    date.getDay() === 0 || date.getDay() === 6 ? undefined : `?date=${formatDate(date)}`\n  }',
          locale,
        ]),
      },
    },
  },
}
