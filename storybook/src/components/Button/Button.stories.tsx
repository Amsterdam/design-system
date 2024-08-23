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
    label: 'Button label',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
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
    iconEnd: ShareIcon,
  },
}

export const OnlyIcon: Story = {
  args: {
    variant: 'tertiary',
    hideLabel: true,
    iconStart: ShareIcon,
  },
}

export const TextWrapping: Story = {
  args: {
    label: 'Vergunningsaanvraag verzenden',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '16rem' }}>
        <Story />
      </div>
    ),
  ],
}
