/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Column, Icon, Row } from '@aram-limpens/design-system-react'
import type { IconProps } from '@aram-limpens/design-system-react'
import { Heading } from '@aram-limpens/design-system-react/src'
import { EmailIcon } from '@aram-limpens/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading } from '../shared/exampleContent'

const heading = exampleHeading()

const meta = {
  title: 'Components/Text/Heading',
  component: Heading,
  args: {
    children: heading,
    level: 1,
  },
  argTypes: {
    children: {
      description: 'The heading text.',
      table: { disable: false },
    },
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
  },
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

export const InverseColour: Story = {
  args: {
    color: 'inverse',
    level: 2,
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Heading text',
    level: 4,
  },
  argTypes: {
    level: {
      options: [3, 4],
    },
    size: {
      control: {
        labels: { undefined: 'not set' },
      },
      options: [undefined, 'level-3', 'level-4', 'level-5', 'level-6'],
    },
  },
  render: ({ children, ...args }) => {
    let iconSize
    if (args.level) iconSize = `heading-${args.level}`
    if (args.size) iconSize = args.size.replace('level', 'heading')

    return (
      <Row gap="small">
        <Icon color={args.color} size={iconSize as IconProps['size']} svg={EmailIcon} />
        <Heading {...args}>{children}</Heading>
      </Row>
    )
  },
}
