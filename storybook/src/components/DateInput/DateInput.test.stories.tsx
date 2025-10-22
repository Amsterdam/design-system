/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DateInput } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as dateInputMeta } from './DateInput.stories'

const meta = {
  ...dateInputMeta,
  title: 'Components/Forms/Date Input',
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => getVariants({ component: DateInput, args }),
  tags: ['!dev', '!autodocs'],
}
