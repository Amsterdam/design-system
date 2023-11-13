/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AspectRatio, Image } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
  args: {
    ratio: 'square',
  },
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['extra-wide', 'wide', 'square', 'tall', 'extra-tall'],
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

const storyConfig = {
  'extra-wide': {
    image: 'https://picsum.photos/640/360',
  },
  wide: {
    image: 'https://picsum.photos/480/360',
  },
  square: {
    image: 'https://picsum.photos/360/360',
  },
  tall: {
    image: 'https://picsum.photos/360/480',
  },
  'extra-tall': {
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

export const ExtraWide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide',
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
    ratio: 'extra-tall',
  },
}
