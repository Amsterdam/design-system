/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Highlight } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Highlight',
  component: Highlight,
  args: {
    children: 'Nieuw component',
  },
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['orange', 'purple', 'green'],
      },
    },
  },
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'orange',
  },
}
