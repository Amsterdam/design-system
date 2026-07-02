/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Column, Icon, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'

import { inverseColorArgType, requiredIconArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Media/Icon',
  component: Icon,
  args: {
    svg: Icons.MailIcon,
  },
  argTypes: {
    color: inverseColorArgType,
    size: {
      control: {
        labels: { undefined: 'medium body text (default)' },
        type: 'select',
      },
      options: [undefined, ...iconSizes],
    },
    svg: requiredIconArgType,
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithBodyText: Story = {
  argTypes: {
    // This story pairs the Icon with body text, so it offers only the body text sizes, in ascending order.
    size: {
      control: {
        labels: { undefined: 'medium (default)' },
        type: 'radio',
      },
      options: ['small', undefined, 'large'],
    },
  },
  render: (args) => {
    const paragraphSize = args.size as 'small' | 'large'
    const getSizeLabel = (size: 'small' | 'large' | undefined) => {
      if (size === undefined) return 'Regular'
      return size.charAt(0).toUpperCase() + size.slice(1)
    }

    return (
      <Row gap="small">
        <Icon {...args} />
        <Paragraph color={args.color} size={paragraphSize}>
          {getSizeLabel(paragraphSize)} body text
        </Paragraph>
      </Row>
    )
  },
}

export const WithAHeading: Story = {
  args: {
    size: 'heading-3',
  },
  argTypes: {
    // This story pairs the Icon with a Heading, so it offers only the heading sizes.
    size: {
      control: { type: 'radio' },
      options: iconSizes.filter((size) => size.startsWith('heading-')),
    },
  },
  render: (args) => {
    const headingSize = args.size ? (args.size.slice(-1) as '1' | '2' | '3' | '4' | '5') : '3'

    return (
      <Row gap="small">
        <Icon {...args} />
        <Heading color={args.color} level={1} size={`level-${headingSize}`}>
          Heading {headingSize} text
        </Heading>
      </Row>
    )
  },
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

export const RightToLeft: Story = {
  args: {
    svg: Icons.ArrowForwardIcon,
  },
  render: (args) => (
    <Row gap="large">
      <Column gap="x-small">
        <Paragraph>Left-to-right</Paragraph>
        <Icon {...args} />
      </Column>
      <Column dir="rtl" gap="x-small">
        <Paragraph>Right-to-left</Paragraph>
        <Icon {...args} />
      </Column>
    </Row>
  ),
}
