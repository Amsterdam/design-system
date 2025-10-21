/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as logoMeta } from './Logo.stories'

const meta = {
  ...logoMeta,
  title: 'Components/Media/Logo',
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Logo, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
