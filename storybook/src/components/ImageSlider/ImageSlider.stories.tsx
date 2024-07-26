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
          <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover alt="This is gallery image 1" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={1}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/101/1280/720" loading="lazy" cover alt="This is gallery image 2" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/153/1280/720" loading="lazy" cover alt="This is gallery image 3" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={3}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/159/1280/720" loading="lazy" cover alt="This is gallery image 4" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={4}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/123/1280/720" loading="lazy" cover alt="This is gallery image 5" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={5}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/151/1280/720" loading="lazy" cover alt="This is gallery image 6" />
        </AspectRatio>
      </ImageSlider.Item>,
    ],
    controls: true,
    scrollbar: false,
    snapstop: true,
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

export const NoSnapstop: Story = {
  args: {
    snapstop: false,
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

export const VariousSizes: Story = {
  args: {
    children: [
      <ImageSlider.Item slideId={0}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover alt="This is gallery image 1" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={1}>
        <AspectRatio ratio="square">
          <Image src="https://picsum.photos/id/101/1280/1280" loading="lazy" cover alt="This is gallery image 2" />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/153/1280/720" loading="lazy" cover alt="This is gallery image 3" />
        </AspectRatio>
      </ImageSlider.Item>,
    ],
  },
}
