/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { MailIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Text/Paragraph',
  component: Paragraph,
  args: {
    children: paragraph,
  },
  argTypes: {
    children: {
      description: 'The paragraph text.',
      table: { disable: false },
    },
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
    size: {
      control: {
        labels: { large: 'large', small: 'small', undefined: 'medium' },
        type: 'radio',
      },
      options: ['small', undefined, 'large'],
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LargeText: Story = {
  args: {
    size: 'large',
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

export const WithIcon: Story = {
  args: {
    children: 'Heading text',
  },
  render: ({ children, ...args }) => (
    <Row gap="small">
      <Icon color={args.color} size={args.size} svg={MailIcon} />
      <Paragraph {...args}>{children}</Paragraph>
    </Row>
  ),
}
