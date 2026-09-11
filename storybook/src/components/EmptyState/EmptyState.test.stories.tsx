/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmptyState } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as emptyStateMeta } from './EmptyState.stories'

const meta = {
  ...emptyStateMeta,
  title: 'Components/TODO-ADD-GROUP/Empty State',
} satisfies Meta<typeof EmptyState>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(EmptyState, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
