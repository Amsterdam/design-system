/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ComboBox } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Combo-Box',
  component: ComboBox,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof ComboBox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
