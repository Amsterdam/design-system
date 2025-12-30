/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { BorderSample } from './BorderSample'

const meta = {
  title: 'Components/Storybook/Border Sample',
  args: {
    borderSize: 'var(--ams-border-width-m)',
  },
} satisfies Meta<typeof BorderSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants(BorderSample, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
