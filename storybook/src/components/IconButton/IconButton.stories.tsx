/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { IconButton } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Buttons/Icon Button',
  component: IconButton,
  args: {
    disabled: false,
    label: 'Sluiten',
    size: undefined,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
    size: {
      control: {
        labels: { undefined: 'default' },
        type: 'select',
      },
      options: [undefined, ...iconSizes],
    },
    svg: {
      control: {
        type: 'select',
      },
      mapping: Icons,
      options: Object.keys(Icons),
    },
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
