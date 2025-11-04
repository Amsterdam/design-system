/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Overlap } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as buttonMeta } from './Overlap.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Layout/Overlap',
} satisfies Meta<typeof Overlap>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [<img alt="" key={1} src="https://picsum.photos/id/122/1280/720" />, <p key={2}>Overlap test</p>],
  },
  render: (args) =>
    renderComponentVariants(Overlap, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
