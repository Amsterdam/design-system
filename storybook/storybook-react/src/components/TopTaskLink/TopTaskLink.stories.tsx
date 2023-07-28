/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { TopTaskLink } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/top-task-link/top-task-link.scss'

const meta = {
  title: 'Top task link',
  component: TopTaskLink,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof TopTaskLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
