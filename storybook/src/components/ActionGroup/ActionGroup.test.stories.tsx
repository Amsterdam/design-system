/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as buttonMeta } from './ActionGroup.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Layout/Action Group',
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    getVariants({
      component: ActionGroup,
      args,
      children: [<button key={1}>Stoppen</button>, <button key={2}>Verder</button>],
    }),
  tags: ['!dev', '!autodocs'],
}
