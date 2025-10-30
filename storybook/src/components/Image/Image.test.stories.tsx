/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
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
    src: 'https://picsum.photos/id/122/1280/720',
  },
  render: (args) => renderComponentVariants(Image, { args }),
  tags: ['!dev', '!autodocs'],
}
