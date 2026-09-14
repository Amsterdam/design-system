/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner, spinnerSizeOptions } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: spinnerSizeOptions },
  },
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'medium',
  },
}
