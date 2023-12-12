/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Mark } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Mark',
  component: Mark,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof Mark>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
