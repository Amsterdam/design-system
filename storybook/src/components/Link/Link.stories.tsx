/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Link, Paragraph } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import { contrastColorDecorator, inverseColorDecorator } from '../shared/decorators'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'Link label',
    href: '#',
  },
  argTypes: {
    children: {
      description: 'The link text.',
      table: { disable: false },
    },
    href: {
      description: 'The url for the link.',
      name: 'href',
      type: { name: 'string', required: false },
    },
  },
  decorators: [contrastColorDecorator, inverseColorDecorator],
} satisfies Meta<typeof Link>

export default meta

export const Default: Story = {}

export const Standalone: Story = {}

export const Inline: Story = {
  args: {
    children: 'typograaf',
    variant: 'inline',
  },
  decorators: [
    (Story) => (
      <Paragraph>
        Jouw <Story /> biedt mij zulke exquise schreven!
      </Paragraph>
    ),
  ],
}

export const ContrastColour: Story = {
  args: {
    contrastColor: true,
  },
}

export const InverseColour: Story = {
  args: {
    inverseColor: true,
  },
}
