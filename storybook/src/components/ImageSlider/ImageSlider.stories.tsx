/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ImageSlider } from '@amsterdam/design-system-react/src'

import { maximiseInlineSize } from '#storybook/_common/decorators'
import examplePhoto02 from '#storybook/_common/images/example-photo-02.jpg'
import examplePhoto03 from '#storybook/_common/images/example-photo-03.jpg'
import examplePhoto04 from '#storybook/_common/images/example-photo-04.jpg'
import examplePhoto06 from '#storybook/_common/images/example-photo-06.jpg'
import examplePhoto07 from '#storybook/_common/images/example-photo-07.jpg'

const meta = {
  title: 'Components/Media/Image Slider',
  component: ImageSlider,
  args: {
    controls: true,
    images: [
      {
        alt: 'Bridge',
        src: examplePhoto03,
      },
      {
        alt: 'Bunker',
        src: examplePhoto02,
      },
      {
        alt: 'Chairs',
        src: examplePhoto06,
      },
      {
        alt: 'Droplet',
        src: examplePhoto07,
      },
      {
        alt: 'Dew',
        src: examplePhoto04,
      },
    ],
  },
  decorators: [maximiseInlineSize('vi-medium')],
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
        src: examplePhoto03,
        srcSet: `${examplePhoto03} 640w, ${examplePhoto03} 1280w`,
      },
      {
        alt: 'Bunker',
        sizes: '(max-width: 37.5rem) 640px, 50vw',
        src: examplePhoto02,
        srcSet: `${examplePhoto02} 640w, ${examplePhoto02} 1280w`,
      },
      {
        alt: 'Chairs',
        sizes: '(max-width: 37.5rem) 640px, 50vw',
        src: examplePhoto06,
        srcSet: `${examplePhoto06} 640w, ${examplePhoto06} 1280w`,
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
        src: examplePhoto03,
      },
      {
        alt: 'Bunker',
        caption:
          'An abandoned bunker on the coast, left behind after the Second World War. Nature has slowly reclaimed the structure, with moss and wild grasses growing through the cracks in the concrete. Local historians have documented dozens of similar fortifications along this stretch of coastline, most of them built hastily in the early 1940s as part of the Atlantic Wall.',
        src: examplePhoto02,
      },
      {
        alt: 'Chairs',
        src: examplePhoto06,
      },
      {
        alt: 'Droplet',
        caption:
          'A single droplet suspended in mid-air, caught in a fraction of a second by a high-speed camera. The surface tension holding the droplet together is the result of cohesive forces between water molecules.',
        src: examplePhoto07,
      },
      {
        alt: 'Dew',
        caption: "Morning dew on a spider's web.",
        src: examplePhoto04,
      },
    ],
  },
}
