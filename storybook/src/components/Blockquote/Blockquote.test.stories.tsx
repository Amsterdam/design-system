/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as blockquoteMeta } from './Blockquote.stories'

const meta = {
  ...blockquoteMeta,
  title: 'Components/Text/Blockquote',
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Blockquote, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
