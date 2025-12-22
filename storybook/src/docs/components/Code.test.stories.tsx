/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { Code } from './Code'

const meta = {
  title: 'Components/Storybook/Code',
  args: {
    children: ['var(--ams-color-text)'],
  },
} satisfies Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    renderComponentVariants(Code, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
