/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { IconProps } from '@amsterdam/design-system-react'

import { Column, Icon, Row } from '@amsterdam/design-system-react'
import { MailIcon } from '@amsterdam/design-system-react-icons'
import { Heading } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
  args: {
    level: 2,
  },
  render: (args) => (
    <Column gap="small">
      <Heading {...args} size="level-1" />
      <Heading {...args} size="level-2" />
      <Heading {...args} size="level-3" />
      <Heading {...args} size="level-4" />
      <Heading {...args} size="level-5" />
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
    level: 3,
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4],
    },
    size: {
      control: {
        labels: { undefined: 'not set' },
      },
      options: [undefined, 'level-1', 'level-2', 'level-3', 'level-4', 'level-5'],
    },
  },
  render: ({ children, ...args }) => {
    let iconSize
    if (args.level) iconSize = `heading-${args.level}`
    if (args.size) iconSize = args.size.replace('level', 'heading')

    return (
      <Row gap="small">
        <Icon color={args.color} size={iconSize as IconProps['size']} svg={<MailIcon />} />
        <Heading {...args}>{children}</Heading>
      </Row>
    )
  },
}
