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
      <time dateTime="2026-01-01" key={1}>
        1 januari 2026
      </time>,
      <Metadata.Separator key={2} />,
      'Belastingen, Wonen, WOZ',
    ],
  },
  argTypes: {
    color: inverseColorArgType,
    size: textSizeArgType(['small', undefined]),
  },
  subcomponents: {
    'Metadata.Separator': Metadata.Separator,
  },
} satisfies Meta<typeof Metadata>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OneKindOfMetadata: Story = {
  args: {
    children: <time dateTime="2025-07-29">29 juli 2025</time>,
  },
}

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
