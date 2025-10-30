/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Switch } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as switchMeta } from './Switch.stories'

const meta = {
  ...switchMeta,
  title: 'Components/Forms/Switch',
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Switch, { args }),
  tags: ['!dev', '!autodocs'],
}
