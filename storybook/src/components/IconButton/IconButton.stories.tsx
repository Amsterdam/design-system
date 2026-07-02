/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconButton } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'

import { contrastInverseColorArgType, disabledArgType, iconArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  args: {
    disabled: false,
    label: 'Sluiten',
    size: undefined,
  },
  argTypes: {
    color: contrastInverseColorArgType,
    disabled: disabledArgType,
    size: {
      control: {
        labels: { undefined: 'medium body text (default)' },
        type: 'select',
      },
      options: [undefined, ...iconSizes],
    },
    svg: iconArgType('CloseIcon'),
  },
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ContrastColour: Story = {
  args: {
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
