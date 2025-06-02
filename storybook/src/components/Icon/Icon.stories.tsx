/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { Icon, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Media/Icon',
  component: Icon,
  args: {
    svg: Icons.MailIcon,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
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
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBodyText: Story = {
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color}>Regular body text</Paragraph>
    </Row>
  ),
}

export const WithSmallBodyText: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="small">
        Small body text
      </Paragraph>
    </Row>
  ),
}

export const WithLargeBodyText: Story = {
  args: {
    size: 'large',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Paragraph color={args.color} size="large">
        Large body text
      </Paragraph>
    </Row>
  ),
}

export const WithHeading3: Story = {
  args: {
    size: 'heading-3',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={3}>
        Heading 3 text
      </Heading>
    </Row>
  ),
}

export const WithHeading4: Story = {
  args: {
    size: 'heading-4',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4}>
        Heading 4 text
      </Heading>
    </Row>
  ),
}

export const WithHeading5: Story = {
  args: {
    size: 'heading-5',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4} size="level-5">
        Heading 5 text
      </Heading>
    </Row>
  ),
}

export const WithHeading6: Story = {
  args: {
    size: 'heading-6',
  },
  render: (args) => (
    <Row gap="small">
      <Icon {...args} />
      <Heading color={args.color} level={4} size="level-6">
        Heading 6 text
      </Heading>
    </Row>
  ),
}

export const Square: Story = {
  args: {
    square: true,
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
