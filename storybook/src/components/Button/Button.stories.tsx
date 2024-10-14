/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { ShareIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    variant: 'primary',
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    icon: {
      table: { disable: true },
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
    children: 'Delen',
    icon: ShareIcon,
  },
}

export const WithIconAtStart: Story = {
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'start',
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Delen',
    icon: ShareIcon,
    iconPosition: 'only',
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
