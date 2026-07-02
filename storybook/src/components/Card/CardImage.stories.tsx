/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'
import { aspectRatioOptions } from '@amsterdam/design-system-react/src/common/types'

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
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} satisfies Meta<typeof Card.Image>

export default meta

type Story = StoryObj<typeof meta>

export const Image: Story = {
  args: {
    alt: '',
    aspectRatio: '16:9',
    src: 'https://picsum.photos/800/450',
  },
}
