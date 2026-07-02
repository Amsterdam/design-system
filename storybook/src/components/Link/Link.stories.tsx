/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Link } from '@amsterdam/design-system-react/src'

import {
  childrenArgType,
  contrastInverseColorArgType,
  hrefArgType,
  linkComponentArgType,
} from '#storybook/_common/argTypes'

type Story = StoryObj<typeof Link>

const meta = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    children: 'typograaf',
    href: '#',
  },
  argTypes: {
    children: childrenArgType('The link text.'),
    color: contrastInverseColorArgType,
    href: hrefArgType,
    linkComponent: linkComponentArgType,
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
