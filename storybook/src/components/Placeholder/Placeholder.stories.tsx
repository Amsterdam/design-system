/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Placeholder } from '@amsterdam/design-system-react/src'
import { placeholderAppearances } from '@amsterdam/design-system-react/src/Placeholder/Placeholder'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Feedback/Placeholder',
  component: Placeholder,
  argTypes: {
    appearance: {
      control: {
        labels: { undefined: 'paragraph (default)' },
        type: 'radio',
      },
      options: [undefined, ...placeholderAppearances.filter((appearance) => appearance !== 'paragraph')],
    },
    columns: {
      control: { min: 1, step: 1, type: 'number' },
      if: { arg: 'appearance', eq: 'table' },
    },
    lines: {
      control: { min: 1, step: 1, type: 'number' },
    },
    rows: {
      control: { min: 1, step: 1, type: 'number' },
      if: { arg: 'appearance', eq: 'table' },
    },
  },
} satisfies Meta<typeof Placeholder>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Card: Story = {
  args: {
    appearance: 'card',
  },
  decorators: [maximiseInlineSize('24rem')],
}

export const Heading: Story = {
  args: {
    appearance: 'heading',
  },
}

export const List: Story = {
  args: {
    appearance: 'list',
  },
}

export const Table: Story = {
  args: {
    appearance: 'table',
  },
}
