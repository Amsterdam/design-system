/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ImageSlider } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/122/640/360',
        srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w',
      },
      {
        alt: 'Bunker',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/101/640/360',
        srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w',
      },
      {
        alt: 'Chairs',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/153/640/360',
        srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w',
      },
    ],
  },
}

export const VariousAspectRatios: Story = {
  args: {
    images: [
      {
        alt: 'Landscape 16:9',
        aspectRatio: '16:9',
        src: 'https://picsum.photos/id/870/768/432',
      },
      {
        alt: 'Landscape 4:3',
        aspectRatio: '4:3',
        src: 'https://picsum.photos/id/870/576/432',
      },
      {
        alt: 'Square 1:1',
        aspectRatio: '1:1',
        src: 'https://picsum.photos/id/870/432/432',
      },
      {
        alt: 'Portrait 3:4',
        aspectRatio: '3:4',
        src: 'https://picsum.photos/id/870/324/432',
      },
      {
        alt: 'Portrait 9:16',
        aspectRatio: '9:16',
        src: 'https://picsum.photos/id/870/243/432',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxInlineSize: '15.1875rem' }}>
        <Story />
      </div>
    ),
  ],
}
