/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { LinkList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Navigation/Link List',
  component: LinkList,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof LinkList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
