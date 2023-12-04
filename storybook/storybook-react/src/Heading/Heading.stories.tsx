/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading } from '../shared/exampleContent'

const meta = {
  title: 'Text/Heading',
  component: Heading,
  args: {
    inverseColor: false,
  },
  argTypes: {
    level: {
      control: 'radio',
      options: [1, 2, 3, 4],
    },
    size: {
      control: 'radio',
      options: ['level-1', 'level-2', 'level-3', 'level-4'],
    },
    inverseColor: { control: 'boolean' },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}

export const Heading1: Story = {
  args: {
    children: exampleHeading(),
  },
}

export const Heading2: Story = {
  args: {
    children: exampleHeading(),
    level: 2,
  },
}

export const Heading3: Story = {
  args: {
    children: exampleHeading(),
    level: 3,
  },
}

export const Heading4: Story = {
  args: {
    children: exampleHeading(),
    level: 4,
  },
}

export const InvertedColor: Story = {
  args: {
    children: exampleHeading(),
    inverseColor: true,
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}
