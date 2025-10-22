/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextInput } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as textInputMeta } from './TextInput.stories'

const meta = {
  ...textInputMeta,
  title: 'Components/Forms/Text Input',
} satisfies Meta<typeof TextInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: TextInput, args, variants: ['disabled', 'hovered'] }),
  tags: ['!dev', '!autodocs'],
}
