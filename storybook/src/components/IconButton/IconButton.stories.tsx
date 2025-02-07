/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { IconButton } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

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
        labels: { undefined: 'level-5' },
        type: 'radio',
      },
      options: ['level-3', 'level-4', undefined, 'level-6'],
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

export const Level3: Story = {
  args: {
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    size: 'level-6',
  },
}

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
