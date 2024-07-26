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
      <ImageSlider.Item key="1" slideId={0}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/122/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="2" slideId={1}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/101/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="3" slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/153/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="4" slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/159/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="5" slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/123/1280/720" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="6" slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/id/151/1280/720" loading="lazy" cover />
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
