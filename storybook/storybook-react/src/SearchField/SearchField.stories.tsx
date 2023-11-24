/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SearchField } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Search Field',
  component: SearchField,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
