/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column } from '@amsterdam/design-system-react'
import { Heading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { inverseColorDecorator } from '../shared/decorators'
import { exampleHeading } from '../shared/exampleContent'

const heading = exampleHeading()

const meta = {
  title: 'Components/Text/Heading',
  component: Heading,
  args: {
    children: heading,
    inverseColor: false,
  },
  argTypes: {
    children: {
      description: 'The heading text.',
      table: { disable: false },
    },
  },
  decorators: [inverseColorDecorator],
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Level1: Story = {}

export const Level2: Story = {
  args: {
    level: 2,
  },
}

export const Level3: Story = {
  args: {
    level: 3,
  },
}

export const Level4: Story = {
  args: {
    level: 4,
  },
}

export const Sizes: Story = {
  render: (args) => (
    <Column gap="small">
      <Heading {...args} key="level-1" size="level-1" />
      <Heading {...args} key="level-2" size="level-2" />
      <Heading {...args} key="level-3" size="level-3" />
      <Heading {...args} key="level-4" size="level-4" />
      <Heading {...args} key="level-5" size="level-5" />
      <Heading {...args} key="level-6" size="level-6" />
    </Column>
  ),
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
}
