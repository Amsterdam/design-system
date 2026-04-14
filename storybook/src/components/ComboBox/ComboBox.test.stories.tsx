/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComboBox } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as comboBoxMeta } from './ComboBox.stories'

const meta = {
  ...comboBoxMeta,
  title: 'Combo-Box',
} satisfies Meta<typeof ComboBox>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(ComboBox, { args }),
  tags: ['!dev', '!autodocs'],
}
