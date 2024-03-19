/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Component, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Component',
  component: Component,
  args: {
    children: 'Interactive demo showcasing the component in action.',
    size: 'small',
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        labels: { small: 'small', undefined: 'medium', large: 'large' },
      },
      options: ['small', undefined, 'large'],
    },
  },
  decorators: [
    (Story) => (
      <Paragraph size="small">
        <Story />
      </Paragraph>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
