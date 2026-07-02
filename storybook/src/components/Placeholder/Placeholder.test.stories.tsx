/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Placeholder } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as placeholderMeta } from './Placeholder.stories'

const meta = {
  ...placeholderMeta,
  title: 'Components/Feedback/Placeholder',
} satisfies Meta<typeof Placeholder>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(Placeholder, { args, layout: 'grid' }, context),
  tags: ['!dev', '!autodocs'],
}
