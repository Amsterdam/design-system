/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as checkboxMeta } from './Checkbox.stories'

const meta = {
  ...checkboxMeta,
  title: 'Components/Forms/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants({ component: Checkbox, args }),
  tags: ['!dev', '!autodocs'],
}
