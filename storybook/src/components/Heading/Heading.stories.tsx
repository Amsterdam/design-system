/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Heading, headingSizes } from '@amsterdam/design-system-react/src'
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
      {headingSizes.map((size) => (
        <Heading {...args} key={size} size={size} />
      ))}
    </Column>
  ),
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
}
