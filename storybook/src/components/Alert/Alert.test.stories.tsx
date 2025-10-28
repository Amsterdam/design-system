/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Alert } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect, fn } from 'storybook/test'

import { default as alertMeta } from './Alert.stories'

const meta = {
  ...alertMeta,
  title: 'Components/Feedback/Alert',
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    closeable: true,
    onClose: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'))
    expect(args.onClose).toHaveBeenCalled()
  },
  tags: ['!dev', '!autodocs'],
}
