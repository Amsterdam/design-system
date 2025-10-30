/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Blockquote } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as blockquoteMeta } from './Blockquote.stories'

const meta = {
  ...blockquoteMeta,
  title: 'Components/Text/Blockquote',
} satisfies Meta<typeof Blockquote>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Blockquote, { args }),
  tags: ['!dev', '!autodocs'],
}
