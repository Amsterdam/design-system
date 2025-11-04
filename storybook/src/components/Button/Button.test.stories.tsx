/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as buttonMeta } from './Button.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Buttons/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(Button, { args, variants: ['disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
