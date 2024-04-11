/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { TimeInput } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Time Input',
  component: TimeInput,
  args: {
    disabled: false,
    value: '',
  },
} satisfies Meta<typeof TimeInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
