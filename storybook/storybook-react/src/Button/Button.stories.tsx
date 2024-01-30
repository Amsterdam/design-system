/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button, Icon } from '@amsterdam/design-system-react'
import { CloseIcon, ShareIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Buttons/Button',
  component: Button,
  args: {
    children: 'Default',
    disabled: false,
    variant: 'primary',
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

export const PrimaryWithIconLeft: Story = {
  args: {
    children: [<Icon key="icon" svg={CloseIcon} size="level-5" />, 'Primary'],
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
}

export const SecondaryWithIcon: Story = {
  args: {
    variant: 'secondary',
    children: ['Secondary', <Icon key="icon" svg={ShareIcon} size="level-5" />],
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
  },
}

export const TertiaryWithIcon: Story = {
  args: {
    children: ['Tertiary', <Icon key="icon" svg={ShareIcon} size="level-5" />],
    variant: 'tertiary',
  },
}
