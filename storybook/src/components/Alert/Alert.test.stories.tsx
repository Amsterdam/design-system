/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert } from '@amsterdam/design-system-react/src'
import { expect, fn } from 'storybook/test'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
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
    const interactionTest = canvas.getByTestId('interaction-test')
    const button = interactionTest.querySelector('button')
    if (!button) return
    await userEvent.click(button)
    expect(args.onClose).toHaveBeenCalled()
  },
  render: (args) => (
    <>
      {renderComponentVariants(Alert, { args })}
      <Alert data-testid="interaction-test" {...args} />
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
