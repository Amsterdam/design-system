/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Mark } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as markMeta } from './Mark.stories'

const meta = {
  ...markMeta,
  title: 'Components/Text/Mark',
} satisfies Meta<typeof Mark>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Mark, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
