/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionGroup } from '@amsterdam/design-system-react'
import { CloseIcon } from '@amsterdam/design-system-react-icons'
import { Button } from '@amsterdam/design-system-react/src'
import { buttonVariants } from '@amsterdam/design-system-react/src/Button/Button'

import { disabledArgType } from '#storybook/_common/argTypes'
import { maximiseInlineSize } from '#storybook/_common/decorators'
import { iconArgType } from '#storybook/_common/iconArgTypes'

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  args: {
    children: 'Versturen',
    disabled: false,
    iconBefore: false,
  },
  argTypes: {
    disabled: disabledArgType,
    icon: iconArgType(),
    iconBefore: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
    iconOnly: {
      control: {
        type: 'boolean',
      },
      if: {
        arg: 'icon',
      },
    },
    variant: {
      control: {
        labels: { undefined: 'primary (default)' },
        type: 'radio',
      },
      options: [undefined, ...buttonVariants.filter((variant) => variant !== 'primary')],
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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    icon: {
      table: { disable: true },
    },
    iconBefore: {
      table: { disable: true },
    },
    iconOnly: {
      table: { disable: true },
    },
    variant: {
      table: { disable: true },
    },
  },
  render: ({ disabled }) => (
    <ActionGroup>
      <Button disabled={disabled}>Versturen</Button>
      <Button disabled={disabled} variant="secondary">
        Annuleren
      </Button>
      <Button disabled={disabled} variant="tertiary">
        Terug
      </Button>
    </ActionGroup>
  ),
}

export const WithIcon: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
  },
}

export const WithIconBefore: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconBefore: true,
  },
}

export const WithIconOnly: Story = {
  args: {
    children: 'Sluiten',
    icon: <CloseIcon />,
    iconOnly: true,
    variant: 'tertiary',
  },
}

export const TextWrapping: Story = {
  args: {
    children: 'Vergunningsaanvraag verzenden',
  },
  decorators: [maximiseInlineSize('16rem')],
}
