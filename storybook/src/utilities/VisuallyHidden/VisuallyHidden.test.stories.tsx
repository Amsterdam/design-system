/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import type { VisuallyHidden } from './VisuallyHidden'

import { default as visuallyHiddenMeta } from './VisuallyHidden.stories'

const meta = {
  ...visuallyHiddenMeta,
  title: 'Utilities/CSS/Visually Hidden',
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Snapshots the one regression that is visible by definition: the hidden paragraph becoming perceivable.
 * The story shows a single visible paragraph; a second one appearing means the utility stopped hiding.
 */
export const Test: Story = {
  tags: ['!dev', '!autodocs', '!manifest'],
}
