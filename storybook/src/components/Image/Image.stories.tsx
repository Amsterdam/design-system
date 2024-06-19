/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react/src'
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

export const MultipleSources: Story = {
  args: {
    alt: '',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
    sizes: '(max-width: 36rem) 640px, 50vw',
  },
}

export const LazyLoading: Story = {
  args: {
    alt: '',
    src: 'https://picsum.photos/2560/1440',
    loading: 'lazy',
  },
}
