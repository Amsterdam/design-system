/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AspectRatio, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Aspect ratio',
  component: AspectRatio,
  args: {
    ratio: 'square',
  },
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['tall', 'square', 'wide', 'extra-wide'],
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

const textStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: 'white',
  left: '50%',
  padding: '16px',
  position: 'absolute' as 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
}

function getStoryConfig(ratio: string) {
  switch (ratio) {
    case 'tall':
      return {
        image: 'https://picsum.photos/800/1000',
        maxWidth: '400px',
        text: 'Mijn breedte is viervijfde van mijn lengte, ik heb een 4-op-5 verhouding',
      }
    case 'wide':
      return {
        image: 'https://picsum.photos/1000/800',
        maxWidth: '625px',
        text: 'Mijn breedte is vijfvierde van mijn lengte, ik heb een 5-op-4 verhouding',
      }
    case 'extra-wide':
      return {
        image: 'https://picsum.photos/1600/900',
        maxWidth: '888px',
        text: 'Mijn breedte is zestiennegende van mijn lengte, ik heb een 16-op-9 verhouding',
      }
    default:
      return {
        image: 'https://picsum.photos/800/800',
        maxWidth: '500px',
        text: 'Mijn breedte is even groot als mijn lengte, ik heb een 1-op-1 verhouding',
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
      <img key={1} src={getStoryConfig(ratio).image} style={{ width: '100%' }} />
      <Paragraph key={2} style={textStyle}>
        {getStoryConfig(ratio).text}
      </Paragraph>
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

export const Tall: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'tall',
  },
}

export const Square: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'square',
  },
}

export const Wide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'wide',
  },
}

export const ExtraWide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide',
  },
}
