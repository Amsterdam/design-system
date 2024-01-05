/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { IconButton } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Icon Button',
  component: IconButton,
  args: {
    label: 'Sluiten',
  },
  argTypes: {
    onBackground: {
      control: {
        type: 'radio',
        labels: { undefined: 'default', light: 'light', dark: 'dark' },
      },
      options: [undefined, 'light', 'dark'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['level-3', 'level-4', 'level-5', 'level-6'],
    },
    svg: {
      control: { type: 'select' },
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
