/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Image, ImageSlider } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Image Slider',
  component: ImageSlider,
  args: {
    children: [
      <ImageSlider.Item slideId={0}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={1}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/101/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/153/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={3}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/159/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={4}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/123/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={5}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/151/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
    ],
    controls: true,
    scrollbar: false,
    snapstop: false,
    thumbnails: true,
  },
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

export const Snapstop: Story = {
  args: {
    snapstop: true,
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
