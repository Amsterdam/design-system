/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { HTMLAttributes } from 'react'

const lengthOptions = ['xs', 'sm', 'md', 'lg', 'xl'] as const

type GapProps = {
  length: (typeof lengthOptions)[number]
} & HTMLAttributes<HTMLElement>

const Gap = ({ children, length }: GapProps) => <span className={`ams-gap--${length}`}>{children}</span>

const render = ({ length }: GapProps) => (
  <div className={`ams-gap--${length}`}>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
    <Paragraph>These paragraphs are separated by a gap.</Paragraph>
  </div>
)

const meta = {
  title: 'Utilities/CSS/Gap',
  component: Gap,
  args: {
    length: 'xs',
  },
  argTypes: {
    length: {
      control: 'radio',
      description: 'The amount of vertical space between items.',
      options: lengthOptions,
    },
  },
} satisfies Meta<typeof Gap>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
