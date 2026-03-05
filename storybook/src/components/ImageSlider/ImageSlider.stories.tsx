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

export const WithCaptions: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        caption: 'A bridge over a calm river at dusk.',
        src: 'https://picsum.photos/id/122/1280/720',
      },
      {
        alt: 'Bunker',
        caption:
          'An abandoned bunker on the coast, left behind after the Second World War. Nature has slowly reclaimed the structure, with moss and wild grasses growing through the cracks in the concrete. Local historians have documented dozens of similar fortifications along this stretch of coastline, most of them built hastily in the early 1940s as part of the Atlantic Wall.',
        src: 'https://picsum.photos/id/101/1280/720',
      },
      {
        alt: 'Chairs',
        src: 'https://picsum.photos/id/153/1280/720',
      },
      {
        alt: 'Droplet',
        caption:
          'A single droplet suspended in mid-air, caught in a fraction of a second by a high-speed camera. The surface tension holding the droplet together is the result of cohesive forces between water molecules.',
        src: 'https://picsum.photos/id/159/1280/720',
      },
      {
        alt: 'Dew',
        caption: "Morning dew on a spider's web.",
        src: 'https://picsum.photos/id/123/1280/720',
      },
    ],
  },
}
