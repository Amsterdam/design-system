/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PasswordInput } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as passwordInputMeta } from './PasswordInput.stories'

const meta = {
  ...passwordInputMeta,
  title: 'Components/Forms/Password Input',
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(PasswordInput, { args }),
  tags: ['!dev', '!autodocs'],
}
