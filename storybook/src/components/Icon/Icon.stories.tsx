/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Icon, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { iconSizes } from '@amsterdam/design-system-react/src/Icon/Icon'
import { Meta, StoryObj } from '@storybook/react-vite'

const DEPRECATED_HEADING_SIZES = ['heading-0', 'heading-6']

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
  argTypes: {
    size: {
      control: {
        labels: { undefined: 'medium (default)' },
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
    size: {
      options: [...iconSizes.filter((size) => size.startsWith('heading-') && !DEPRECATED_HEADING_SIZES.includes(size))],
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
