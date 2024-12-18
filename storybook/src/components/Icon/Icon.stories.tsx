/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { Icon } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Media/Icon',
  component: Icon,
  args: {
    inverseColor: false,
    svg: Icons.EmailIcon,
  },
  argTypes: {
    svg: {
      control: {
        type: 'select',
      },
      options: Object.keys(Icons),
      mapping: Icons,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithText: Story = {
  decorators: [
    (Story) => (
      <span style={{ display: 'flex', gap: '1rem' }}>
        <Story />
      </span>
    ),
  ],
  render: (args) => (
    <>
      <Icon {...args} size="level-3" />
      <Heading size="level-3">Inline text</Heading>
    </>
  ),
}

export const Square: Story = {
  args: {
    square: true,
  },
}

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

export const InverseColour: Story = {
  args: {
    inverseColor: true,
  },
}
