/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['level-3', 'level-4', 'level-5', 'level-6', 'level-7'],
    },
    svg: {
      control: { type: 'select' },
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    svg: Icons.Email,
  },
}

export const WithText: Story = {
  render: (args) => (
    <span style={{ display: 'flex', gap: '1rem' }}>
      <Icon {...args} size="level-3" />
      <Heading size="level-3">Inline text</Heading>
    </span>
  ),
  args: {
    svg: Icons.Email,
  },
}

export const Level3: Story = {
  args: {
    svg: Icons.Email,
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    svg: Icons.Email,
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    svg: Icons.Email,
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    svg: Icons.Email,
    size: 'level-6',
  },
}

export const Level7: Story = {
  args: {
    svg: Icons.Email,
    size: 'level-7',
  },
}
