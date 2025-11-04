/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as buttonMeta } from './ActionGroup.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Layout/Action Group',
} satisfies Meta<typeof ActionGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [<button key={1}>Stoppen</button>, <button key={2}>Verder</button>],
  },
  render: (args) =>
    renderComponentVariants(ActionGroup, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
