/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Image',
  component: Image,
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alt: '',
    src: 'https://picsum.photos/640/360',
  },
  argTypes: {
    alt: {
      description: 'Describes the image for non-visual users.',
    },
    src: {
      description: 'The url for the image.',
    },
    srcSet: {
      description: 'A set of candidate images.',
    },
  },
}

export const ResponsiveImages: Story = {
  args: {
    alt: '',
    sizes: '(max-width: 36rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
  },
}

export const LazyLoading: Story = {
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440',
  },
}
