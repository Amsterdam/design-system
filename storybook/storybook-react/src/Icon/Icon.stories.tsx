/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Icon } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Media/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['level-3', 'level-4', 'level-5', 'level-6'],
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
    svg: {
      control: {
        type: 'select',
      },
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    svg: Icons.EmailIcon,
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
    svg: Icons.EmailIcon,
  },
}

export const Square: Story = {
  args: {
    svg: Icons.EmailIcon,
    square: true,
  },
}

export const Level3: Story = {
  args: {
    svg: Icons.EmailIcon,
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    svg: Icons.EmailIcon,
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    svg: Icons.EmailIcon,
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    svg: Icons.EmailIcon,
    size: 'level-6',
  },
}
