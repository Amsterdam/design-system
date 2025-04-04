/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { StandaloneLink } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'StandaloneLink',
  component: StandaloneLink,
  args: {
    children: 'Link label',
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
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
  },
} satisfies Meta<typeof StandaloneLink>

export default meta

type Story = StoryObj<typeof meta>

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
