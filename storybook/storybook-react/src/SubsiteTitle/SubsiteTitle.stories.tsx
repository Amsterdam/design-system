/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { SubsiteTitle } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'SubsiteTitle',
  component: SubsiteTitle,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof SubsiteTitle>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
