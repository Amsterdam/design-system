/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as buttonMeta } from './Button.stories'

const meta = {
  ...buttonMeta,
  title: 'Components/Buttons/Button',
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  parameters: {
    pseudo: { hover: ['.hover'] },
  },
  render: (args) => getVariants({ component: Button, args, variants: ['default', 'disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
