/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconButton } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as iconButtonMeta } from './IconButton.stories'

const meta = {
  ...iconButtonMeta,
  title: 'Components/Buttons/Icon Button',
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(IconButton, { args, variants: ['hovered', 'disabled'] }),
  tags: ['!dev', '!autodocs'],
}
