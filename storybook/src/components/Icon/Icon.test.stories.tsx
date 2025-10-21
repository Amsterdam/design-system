/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as iconMeta } from './Icon.stories'

const meta = {
  ...iconMeta,
  title: 'Components/Media/Icon',
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Icon, args, variants: ['default'] }).renderVariants(),
  tags: ['!dev', '!autodocs'],
}
