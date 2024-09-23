/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ImageSlider, Screen } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta = {
  title: 'Components/Media/Image Slider',
  component: ImageSlider,
  args: {
    slides: [
      {
        src: 'https://picsum.photos/id/122/1280/720',
        alt: 'Bridge',
        ratio: 'x-wide',
      },
      {
        src: 'https://picsum.photos/id/101/1280/720',
        alt: 'Bunker',
        ratio: 'x-wide',
      },
      {
        src: 'https://picsum.photos/id/153/1280/720',
        alt: 'Chairs',
        ratio: 'x-wide',
      },
      {
        src: 'https://picsum.photos/id/159/1280/720',
        alt: 'Droplet',
        ratio: 'x-wide',
      },
      {
        src: 'https://picsum.photos/id/123/1280/720',
        alt: 'Dew',
        ratio: 'x-wide',
      },
    ],
    controls: true,
    scrollbar: false,
    thumbnails: true,
  },
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
} satisfies Meta<typeof ImageSlider>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoControls: Story = {
  args: {
    controls: false,
  },
}

export const NoThumbnails: Story = {
  args: {
    thumbnails: false,
  },
}

export const NoSnapstop: Story = {
  args: {
    thumbnails: false,
    controls: false,
  },
}

export const NativeScrollbar: Story = {
  args: {
    scrollbar: true,
    controls: false,
    thumbnails: false,
  },
}

// export const VariousSizes: Story = {
//   args: {
//     children: [
//       <ImageSlider.Item slideId={0}>
//         <AspectRatio ratio="x-wide">
//           <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover alt="This is gallery image 1" />
//         </AspectRatio>
//       </ImageSlider.Item>,
//       <ImageSlider.Item slideId={1}>
//         <AspectRatio ratio="square">
//           <Image src="https://picsum.photos/id/101/1280/1280" loading="lazy" cover alt="This is gallery image 2" />
//         </AspectRatio>
//       </ImageSlider.Item>,
//       <ImageSlider.Item slideId={2}>
//         <AspectRatio ratio="x-wide">
//           <Image src="https://picsum.photos/id/153/1280/720" loading="lazy" cover alt="This is gallery image 3" />
//         </AspectRatio>
//       </ImageSlider.Item>,
//     ],
//   },
// }
