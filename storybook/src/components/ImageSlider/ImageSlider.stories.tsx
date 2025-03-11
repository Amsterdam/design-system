/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ImageSlider } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Image Slider',
  component: ImageSlider,
  args: {
    controls: true,
    images: [
      {
        alt: 'Bridge',
        aspectRatio: '16 / 9',
        src: 'https://picsum.photos/id/122/1280/720',
      },
      {
        alt: 'Bunker',
        aspectRatio: '16 / 9',
        src: 'https://picsum.photos/id/101/1280/720',
      },
      {
        alt: 'Chairs',
        aspectRatio: '16 / 9',
        src: 'https://picsum.photos/id/153/1280/720',
      },
      {
        alt: 'Droplet',
        aspectRatio: '16 / 9',
        src: 'https://picsum.photos/id/159/1280/720',
      },
      {
        alt: 'Dew',
        aspectRatio: '16 / 9',
        src: 'https://picsum.photos/id/123/1280/720',
      },
    ],
  },
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ResponsiveImages: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        aspectRatio: '16 / 9',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/122/640/360',
        srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w',
      },
      {
        alt: 'Bunker',
        aspectRatio: '16 / 9',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/101/640/360',
        srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w',
      },
      {
        alt: 'Chairs',
        aspectRatio: '16 / 9',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/153/640/360',
        srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w',
      },
    ],
  },
}
