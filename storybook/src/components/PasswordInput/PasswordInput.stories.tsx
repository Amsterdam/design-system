/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PasswordInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Password Input',
  component: PasswordInput,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
