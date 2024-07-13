/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Heading, headingLevels, headingSizes } from '@amsterdam/design-system-react/src'
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

export const Levels: Story = {
  render: (args) => (
    <Column gap="medium">
      {headingLevels.map((level) => (
        <Heading {...args} key={level} level={level} />
      ))}
    </Column>
  ),
}

export const Sizes: Story = {
  render: (args) => (
    <Column gap="medium">
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
