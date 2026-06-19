/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { Code } from './Code'

const meta = {
  title: 'Components/Docs/Code',
  args: {
    children: ['var(--ams-color-text)'],
  },
} satisfies Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args, context) => renderComponentVariants(Code, { args }, context),
  tags: ['!dev', '!autodocs'],
}
