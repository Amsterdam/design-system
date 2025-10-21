/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as switchMeta } from './Switch.stories'

const meta = {
  ...switchMeta,
  title: 'Components/Forms/Switch',
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: Switch, args, variants: ['default'] }),
  tags: ['!dev', '!autodocs'],
}
