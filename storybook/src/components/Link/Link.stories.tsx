/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Link } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import { contrastColorDecorator, inverseColorDecorator } from '../shared/decorators'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'Link label',
    contrastColor: false,
    href: '#',
    inverseColor: false,
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
  decorators: [inverseColorDecorator, contrastColorDecorator],
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
