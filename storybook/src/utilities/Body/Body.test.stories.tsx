/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import type { Body } from './Body'

import { default as bodyMeta } from './Body.stories'

const meta = {
  ...bodyMeta,
  title: 'Utilities/CSS/Body',
} satisfies Meta<typeof Body>

export default meta

type Story = StoryObj<typeof meta>

/** The utility has no variants: it sets the page background and the base text style, which the meta already shows. */
export const Test: Story = {
  tags: ['!dev', '!autodocs'],
}
