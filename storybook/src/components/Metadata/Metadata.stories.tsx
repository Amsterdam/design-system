/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Metadata } from '@amsterdam/design-system-react/src'

import { inverseColorArgType, textSizeArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Text/Metadata',
  component: Metadata,
  args: {
    children: [
      <Metadata.Item key={1}>
        <time dateTime="2026-01-01">1 januari 2026</time>
      </Metadata.Item>,
      <Metadata.Item key={2}>Belastingen, Wonen, WOZ</Metadata.Item>,
    ],
  },
  argTypes: {
    color: inverseColorArgType,
    size: textSizeArgType(['small', undefined]),
  },
  subcomponents: {
    'Metadata.Item': Metadata.Item,
  },
} satisfies Meta<typeof Metadata>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SmallText: Story = {
  args: {
    size: 'small',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
