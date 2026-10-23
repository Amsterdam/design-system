/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Column, Image, Row } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize } from '#storybook/_common/decorators'

const meta = {
  title: 'Components/Media/Image',
  component: Image,
  argTypes: {
    aspectRatio: {
      control: {
        labels: { undefined: 'none (default)' },
        type: 'select',
      },
      options: [undefined, ...aspectRatioOptions],
    },
    fit: {
      control: {
        labels: { undefined: 'default (cover)' },
        type: 'radio',
      },
      options: [undefined, 'contain'],
    },
    src: {
      description: 'The url for the image.',
    },
    srcSet: {
      description: 'A set of candidate images.',
    },
  },
  decorators: [maximiseInlineSize('vi-medium')],
} satisfies Meta<typeof Image>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    alt: '',
    src: 'https://picsum.photos/640/360',
  },
}

export const ResponsiveImages: Story = {
  args: {
    alt: '',
    sizes: '(max-width: 37.5rem) 640px, 50vw',
    src: 'https://picsum.photos/1280/720',
    srcSet: 'https://picsum.photos/640/360 640w, https://picsum.photos/1280/720 1280w',
  },
}

export const ContainedImage: Story = {
  args: {
    alt: '',
    fit: 'contain',
    src: 'https://picsum.photos/640/800',
  },
}

export const ContainedImageComparison: Story = {
  args: {
    alt: '',
    src: 'https://picsum.photos/640/800',
  },
  parameters: {
    controls: { include: ['aspectRatio', 'src'] },
  },
  render: ({ aspectRatio, src }) => (
    <Row gap="x-large">
      <Column>
        <Image alt="" aspectRatio={aspectRatio} src={src} />
      </Column>
      <Column>
        <Image alt="" aspectRatio={aspectRatio} fit="contain" src={src} />
      </Column>
    </Row>
  ),
}

export const LazyLoading: Story = {
  args: {
    alt: '',
    loading: 'lazy',
    src: 'https://picsum.photos/2560/1440',
  },
}
