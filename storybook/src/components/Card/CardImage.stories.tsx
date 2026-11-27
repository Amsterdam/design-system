/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize } from '#storybook/_common/decorators'
import examplePhoto21 from '#storybook/_common/images/example-photo-21.jpg'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.Image,
  argTypes: {
    aspectRatio: {
      control: {
        labels: { undefined: 'none' },
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
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  tags: ['!manifest'],
} satisfies Meta<typeof Card.Image>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The photo and its box have different aspect ratios, so `fit` has something to do here.
 * An image that already matches the shape it is given looks the same either way.
 */
export const Image: Story = {
  args: {
    alt: '',
    aspectRatio: '16:9',
    src: examplePhoto21,
  },
  argTypes: {
    alt: {
      description: 'A textual description of the content of the image. Should be empty for `Card.Image`.',
    },
  },
  decorators: [maximiseInlineSize('24rem')],
}
