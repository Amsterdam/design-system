/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Badge, Button, Icon } from '@amsterdam/design-system-react'
import { ShareIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Default',
    variant: 'primary',
    disabled: false,
    busy: false,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: ['Primary', <Icon key="icon" svg={ShareIcon} size="level-5" />],
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const SecondaryWithBadge: Story = {
  args: {
    variant: 'secondary',
    children: ['Secondary', <Badge key="badge" label={99} color="dark-blue" />],
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
}
