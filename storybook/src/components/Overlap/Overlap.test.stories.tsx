/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Overlap } from '@amsterdam/design-system-react/src'

import examplePhoto03Landscape from '#storybook/_common/images/example-photo-03-1280x720.jpg'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as buttonMeta } from './Overlap.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Layout/Overlap',
} satisfies Meta<typeof Overlap>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [<img alt="" key={1} src={examplePhoto03Landscape} />, <p key={2}>Overlap test</p>],
  },
  render: (args, context) => renderComponentVariants(Overlap, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
