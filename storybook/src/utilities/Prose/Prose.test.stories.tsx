/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import type { Prose } from './Prose'

import { default as proseMeta } from './Prose.stories'

const meta = {
  ...proseMeta,
  title: 'Utilities/CSS/Prose',
} satisfies Meta<typeof Prose>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The article and the width decorator come from the meta, so this snapshots the document we document.
 * Duplicating the markup here would let the snapshot drift away from it.
 */
export const Test: Story = {
  tags: ['!dev', '!autodocs'],
}
