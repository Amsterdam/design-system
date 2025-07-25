/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@aram-limpens/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { Gap } from './Gap'
import type { GapProps } from './Gap'

const render = ({ size }: GapProps) => (
  <div className={`ams-gap-${size}`}>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
  </div>
)

const meta = {
  title: 'Utilities/CSS/Gap',
  component: Gap,
  args: {
    size: 'xs',
  },
  argTypes: {
    size: {
      control: {
        labels: { xs: 'x-small', s: 'small', m: 'medium', l: 'large', xl: 'x-large' },
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Gap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
