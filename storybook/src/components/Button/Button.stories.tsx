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
    children: 'Actietekst',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    icon: {
      table: { disable: true },
    },
    iconStart: {
      table: { disable: true },
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const StartIcon: Story = {
  args: {
    iconStart: ShareIcon,
  },
}

export const EndIcon: Story = {
  args: {
    icon: ShareIcon,
  },
}

export const OnlyIcon: Story = {
  args: {
    variant: 'tertiary',
    icon: ShareIcon,
    iconOnly: true,
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
