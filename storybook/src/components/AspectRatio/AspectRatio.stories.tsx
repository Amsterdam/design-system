/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { AspectRatio, Image } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Layout/Aspect Ratio',
  component: AspectRatio,
  args: {
    ratio: 'square',
  },
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['2x-wide', 'x-wide', 'wide', 'square', 'tall', 'x-tall'],
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

const storyConfig = {
  '2x-wide': {
    image: 'https://picsum.photos/1152/360',
  },
  'x-wide': {
    image: 'https://picsum.photos/640/360',
  },
  wide: {
    image: 'https://picsum.photos/450/360',
  },
  square: {
    image: 'https://picsum.photos/360/360',
  },
  tall: {
    image: 'https://picsum.photos/360/450',
  },
  'x-tall': {
    image: 'https://picsum.photos/360/640',
  },
}

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio}>
      <Image alt="" src={storyConfig[ratio ?? 'square'].image} />
    </AspectRatio>
  ),
}

export const Default: Story = {
  ...StoryTemplate,
}

export const DoubleExtraWide: Story = {
  ...StoryTemplate,
  args: {
    ratio: '2x-wide',
  },
}

export const ExtraWide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'x-wide',
  },
}

export const Wide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'wide',
  },
}

export const Square: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'square',
  },
}

export const Tall: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'tall',
  },
}

export const ExtraTall: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'x-tall',
  },
}
