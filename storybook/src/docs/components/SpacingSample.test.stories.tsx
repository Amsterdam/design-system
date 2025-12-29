/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { SpacingSample } from './SpacingSample'

const meta = {
  title: 'Components/Storybook/Spacing Sample',
  args: {
    spacing: 'var(--ams-space-m)',
  },
} satisfies Meta<typeof SpacingSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants(SpacingSample, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
