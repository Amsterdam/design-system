/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DateInput } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Date Input',
  component: DateInput,
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
