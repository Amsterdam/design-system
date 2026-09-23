/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'
import { objectFitOptions } from '@amsterdam/design-system-react/src/Image/Image'

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
      options: objectFitOptions,
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
 * The source is portrait while its shape is 16 by 9, so `objectFit` has something to do here.
 * A source that already matches the shape it is given looks the same either way.
 */
export const Image: Story = {
  args: {
    alt: '',
    aspectRatio: '16:9',
    src: 'https://picsum.photos/800/1200',
  },
  argTypes: {
    alt: {
      description: 'A textual description of the content of the image. Should be empty for `Card.Image`.',
    },
  },
  decorators: [maximiseInlineSize('24rem')],
}
