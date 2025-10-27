/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageSlider } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Media/Image Slider',
  component: ImageSlider,
  args: {
    controls: true,
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
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ResponsiveImages: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        sizes: '(max-width: 37.5rem) 640px, 50vw',
        src: 'https://picsum.photos/id/122/640/360',
        srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w',
      },
      {
        alt: 'Bunker',
        sizes: '(max-width: 37.5rem) 640px, 50vw',
        src: 'https://picsum.photos/id/101/640/360',
        srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w',
      },
      {
        alt: 'Chairs',
        sizes: '(max-width: 37.5rem) 640px, 50vw',
        src: 'https://picsum.photos/id/153/640/360',
        srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w',
      },
    ],
  },
}
