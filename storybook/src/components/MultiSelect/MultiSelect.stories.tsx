/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { MultiSelect } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Multi-Select',
  component: MultiSelect,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof MultiSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
