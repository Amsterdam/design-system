/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react/src'

import examplePhoto03Portrait from '#storybook/_common/images/example-photo-03-portrait.jpg'
import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as imageMeta } from './Image.stories'

const meta = {
  ...imageMeta,
  title: 'Components/Media/Image',
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    alt: '',
    src: examplePhoto03Portrait,
  },
  render: (args, context) => renderComponentVariants(Image, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}
