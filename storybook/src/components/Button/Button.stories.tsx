/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    hideLabel: false,
    variant: 'primary',
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    hideLabel: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
    icon: {
      control: {
        type: 'select',
        labels: { undefined: 'none' },
      },
      options: [undefined, ...Object.keys(Icons)],
      mapping: Icons,
    },
    iconBefore: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    children: 'Annuleren',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Terug',
    variant: 'tertiary',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
  },
}

export const WithiconBefore: Story = {
  args: {
    children: 'Sluiten',
    icon: Icons.CloseIcon,
    iconBefore: true,
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Sluiten',
    hideLabel: true,
    icon: Icons.CloseIcon,
    variant: 'tertiary',
  },
}

export const TextWrapping: Story = {
  args: {
    children: 'Vergunningsaanvraag verzenden',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '16rem' }}>
        <Story />
      </div>
    ),
  ],
}
