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
    controls: true,
    images: [
      {
        alt: 'Bridge',
        ratio: 'x-wide',
        src: 'https://picsum.photos/id/122/1280/720',
      },
      {
        alt: 'Bunker',
        ratio: 'x-wide',
        src: 'https://picsum.photos/id/101/1280/720',
      },
      {
        alt: 'Chairs',
        ratio: 'x-wide',
        src: 'https://picsum.photos/id/153/1280/720',
      },
      {
        alt: 'Droplet',
        ratio: 'x-wide',
        src: 'https://picsum.photos/id/159/1280/720',
      },
      {
        alt: 'Dew',
        ratio: 'x-wide',
        src: 'https://picsum.photos/id/123/1280/720',
      },
    ],
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

export const SourceSetImages: Story = {
  args: {
    images: [
      {
        alt: 'Bridge',
        ratio: 'x-wide',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/122/640/360',
        srcSet: 'https://picsum.photos/id/122/640/360 640w, https://picsum.photos/id/122/1280/720 1280w',
      },
      {
        alt: 'Bunker',
        ratio: 'x-wide',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/101/640/360',
        srcSet: 'https://picsum.photos/id/101/640/360 640w, https://picsum.photos/id/101/1280/720 1280w',
      },
      {
        alt: 'Chairs',
        ratio: 'x-wide',
        sizes: '(max-width: 36rem) 640px, 50vw',
        src: 'https://picsum.photos/id/153/640/360',
        srcSet: 'https://picsum.photos/id/153/640/360 640w, https://picsum.photos/id/153/1280/720 1280w',
      },
    ],
  },
}
