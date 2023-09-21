/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Alert } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  args: {
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    closeable: false,
    icon: false,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        labels: { undefined: 'default', error: 'error', success: 'success' },
      },
      options: [undefined, 'error', 'success'],
    },
    closeable: {
      control: {
        type: 'boolean',
        default: false,
      },
    },
    icon: {
      control: {
        type: 'boolean',
        if: { arg: 'type', eq: ['error', 'success'] },
      },
    },
  },
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: undefined,
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    icon: true,
  },
}

export const Success: Story = {
  args: {
    type: 'success',
    icon: true,
  },
}
