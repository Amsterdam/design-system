/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Link } from '@amsterdam/design-system-react/src'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'typograaf',
    href: '#',
  },
  argTypes: {
    children: {
      description: 'The link text.',
      table: { disable: false },
    },
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    href: {
      description: 'The url for the link.',
      name: 'href',
      type: { name: 'string', required: false },
    },
  },
  decorators: [
    (Story, { args }) => (
      <Paragraph color={args.color === 'inverse' ? 'inverse' : undefined}>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>
    ),
  ],
} satisfies Meta<typeof Link>

export default meta

export const Default: Story = {}

export const ContrastColour: Story = {
  args: {
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
