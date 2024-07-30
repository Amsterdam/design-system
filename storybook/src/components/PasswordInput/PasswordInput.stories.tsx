/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PasswordInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Password Input',
  component: PasswordInput,
  args: {
    disabled: false,
    invalid: false,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
  },
  decorators: [
    (Story) => (
      <form noValidate>
        <Story />
      </form>
    ),
  ],
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
