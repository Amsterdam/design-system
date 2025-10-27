/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
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
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Concertgebouw3x2.jpg/330px-Concertgebouw3x2.jpg',
  },
  render: (args) =>
    getVariants({
      component: Image,
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
