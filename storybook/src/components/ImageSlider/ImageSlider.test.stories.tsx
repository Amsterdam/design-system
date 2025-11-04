/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageSlider } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as imageSliderMeta } from './ImageSlider.stories'

const meta = {
  ...imageSliderMeta,
  title: 'Components/Media/Image Slider',
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () =>
    renderComponentVariants(ImageSlider, {
      args: {
        alt: '',
        images: [
          {
            alt: 'Bridge',
            src: 'https://picsum.photos/id/122/1280/720',
          },
          {
            alt: 'Bunker',
            src: 'https://picsum.photos/id/101/1280/720',
          },
          {
            alt: 'Chairs',
            src: 'https://picsum.photos/id/153/1280/720',
          },
          {
            alt: 'Droplet',
            src: 'https://picsum.photos/id/159/1280/720',
          },
          {
            alt: 'Dew',
            src: 'https://picsum.photos/id/123/1280/720',
          },
        ],
      },
    }),
  tags: ['!dev', '!autodocs'],
}
