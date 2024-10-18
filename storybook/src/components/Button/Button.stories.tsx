/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { PhoneIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    variant: 'primary',
    /* This is the only was storybook will honor the conditional in the iconPosition argType (line 29) */
    // @ts-ignore
    icon: null,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    icon: {
      table: { disable: true },
    },
    iconPosition: {
      if: { arg: 'icon', neq: null },
      control: {
        type: 'inline-radio',
        labels: { undefined: 'end', start: 'start', only: 'only' },
      },
      options: [undefined, 'start', 'only'],
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
    children: 'Bel 14 020',
    icon: PhoneIcon,
  },
}

export const WithIconAtStart: Story = {
  args: {
    children: 'Bel 14 020',
    icon: PhoneIcon,
    iconPosition: 'start',
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Bel 14 020',
    icon: PhoneIcon,
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
