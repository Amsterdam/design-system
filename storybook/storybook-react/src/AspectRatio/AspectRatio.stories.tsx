/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AspectRatio } from '@amsterdam/design-system-react'
import type { Ratio } from '@amsterdam/design-system-react'
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
      options: ['extra-tall', 'tall', 'square', 'wide', 'extra-wide'],
    },
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

function getStoryConfig(ratio: Ratio | undefined) {
  switch (ratio) {
    case 'extra-tall':
      return {
        image: 'https://picsum.photos/900/1600',
        maxWidth: '300px',
      }
    case 'tall':
      return {
        image: 'https://picsum.photos/800/1000',
        maxWidth: '400px',
      }
    case 'wide':
      return {
        image: 'https://picsum.photos/1000/800',
        maxWidth: '625px',
      }
    case 'extra-wide':
      return {
        image: 'https://picsum.photos/1600/900',
        maxWidth: '888px',
      }
    default:
      return {
        image: 'https://picsum.photos/800/800',
        maxWidth: '500px',
      }
  }
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
    <AspectRatio ratio={ratio} style={{ maxWidth: getStoryConfig(ratio).maxWidth }}>
      <img src={getStoryConfig(ratio).image} style={{ width: '100%' }} />
    </AspectRatio>
  ),
}

export const Default: Story = {
  ...StoryTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
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
