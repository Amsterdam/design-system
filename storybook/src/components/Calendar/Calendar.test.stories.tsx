/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Calendar } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as calendarMeta } from './Calendar.stories'

const meta = {
  ...calendarMeta,
  title: 'Calendar',
} satisfies Meta<typeof Calendar>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Calendar, { args }),
  tags: ['!dev', '!autodocs'],
}
