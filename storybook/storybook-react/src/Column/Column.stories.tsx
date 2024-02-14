/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { Column } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Column',
  component: Column,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof Column>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
