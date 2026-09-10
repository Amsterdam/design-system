/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

import { maximiseInlineSize } from '#storybook/_common/decorators'

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
    objectFit: {
      control: { type: 'radio' },
      options: ['contain', 'cover'],
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
 * This file is 16 by 9, like the area it sits in, so `objectFit` has nothing to do here.
 * Set another `aspectRatio` to see the two modes differ.
 */
export const Image: Story = {
  args: {
    alt: '',
    aspectRatio: '16:9',
    objectFit: 'contain',
    src: 'https://picsum.photos/800/450',
  },
  argTypes: {
    alt: {
      description: 'A textual description of the content of the image. Should be empty for `Card.Image`.',
    },
  },
  decorators: [maximiseInlineSize('24rem')],
}
