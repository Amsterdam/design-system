/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridProps } from '@amsterdam/design-system-react'
import type { ArgTypes } from '@storybook/react-vite'

// Shared padding args
export const gridGapAndPaddingArgTypes: ArgTypes<GridProps> = {
  gapVertical: {
    control: {
      labels: { undefined: 'x-large (default)' },
      type: 'radio',
    },
    options: ['none', 'large', undefined, '2x-large'],
  },
  paddingBottom: {
    control: {
      labels: { undefined: 'none (default)' },
      type: 'radio',
    },
    options: [undefined, 'large', 'x-large', '2x-large'],
  },
  paddingTop: {
    control: {
      labels: { undefined: 'none (default)' },
      type: 'radio',
    },
    options: [undefined, 'large', 'x-large', '2x-large'],
  },
  paddingVertical: {
    control: {
      labels: { undefined: 'none (default)' },
      type: 'radio',
    },
    options: [undefined, 'large', 'x-large', '2x-large'],
  },
}

// Date formatter
const locale = 'nl'
const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}
const formatter = new Intl.DateTimeFormat(locale, options)
export const formatDate = (date: Date | number): string => formatter.format(date)
