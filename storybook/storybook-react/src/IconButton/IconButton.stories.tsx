/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { IconButton } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Buttons/Icon Button',
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

export const OnLightBackground: Story = {
  args: {
    onBackground: 'light',
  },
}

export const OnDarkBackground: Story = {
  args: {
    onBackground: 'dark',
  },
}

export const Level3: Story = {
  args: {
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    size: 'level-6',
  },
}
