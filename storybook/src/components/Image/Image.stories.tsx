/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'
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
