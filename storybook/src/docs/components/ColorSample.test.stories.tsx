/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { ColorSample } from './ColorSample'

const meta = {
  title: 'Components/Storybook/Color Sample',
  args: {
    color: 'var(--ams-color-interactive)',
  },
} satisfies Meta<typeof ColorSample>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants(ColorSample, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
