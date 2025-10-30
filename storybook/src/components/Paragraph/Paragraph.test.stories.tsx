/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as paragraphMeta } from './Paragraph.stories'

const meta = {
  ...paragraphMeta,
  title: 'Components/Text/Paragraph',
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Paragraph, { args }),
  tags: ['!dev', '!autodocs'],
}
