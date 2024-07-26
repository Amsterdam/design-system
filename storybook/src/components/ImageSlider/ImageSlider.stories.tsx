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
          <Image src="https://picsum.photos/1280/720?1" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="2" slideId={1}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/1280/720?2" loading="lazy" cover />
        </AspectRatio>
      </ImageSlider.Item>,
      <ImageSlider.Item key="3" slideId={2}>
        <AspectRatio ratio="x-wide">
          <Image src="https://picsum.photos/1280/720?3" loading="lazy" cover />
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
