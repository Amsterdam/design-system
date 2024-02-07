/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Badge, Button, Icon } from '@amsterdam/design-system-react'
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

export const SecondaryWithIconAndBadge: Story = {
  args: {
    variant: 'secondary',
    children: [
      'Secondary',
      <Badge key="badge" label={99} color="dark-blue" />,
      <Icon key="icon" svg={CloseIcon} size="level-5" />,
    ],
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

export const PrimaryDisabled: Story = {
  args: {
    children: 'Primary',
    disabled: true,
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary',
    disabled: true,
    variant: 'secondary',
  },
}

export const TertiaryDisabled: Story = {
  args: {
    children: 'Tertiary',
    disabled: true,
    variant: 'tertiary',
  },
}

export const PrimaryBusy: Story = {
  args: {
    children: 'Primary',
    busy: true,
  },
}

export const SecondaryBusy: Story = {
  args: {
    children: 'Secondary',
    busy: true,
    variant: 'secondary',
  },
}

export const TertiaryBusy: Story = {
  args: {
    children: 'Tertiary',
    busy: true,
    variant: 'tertiary',
  },
}
