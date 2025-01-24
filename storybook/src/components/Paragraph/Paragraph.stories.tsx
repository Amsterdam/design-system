/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Text/Paragraph',
  component: Paragraph,
  args: {
    children: paragraph,
    inverseColor: false,
  },
  argTypes: {
    children: {
      description: 'The paragraph text.',
      table: { disable: false },
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
    inverseColor: true,
  },
}
