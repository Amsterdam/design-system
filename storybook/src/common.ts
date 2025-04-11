import type { GridProps } from '@amsterdam/design-system-react'
import type { ArgTypes } from '@storybook/react'

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
