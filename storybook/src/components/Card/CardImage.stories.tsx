/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Card',
  component: Card.Image,
  argTypes: {
    aspectRatio: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      options: [undefined, '1:1', '4:3', '16:9', '16:5'],
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
