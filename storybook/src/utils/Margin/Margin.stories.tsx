/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { HTMLAttributes } from 'react'

const lengthOptions = ['xs', 'sm', 'md', 'lg', 'xl'] as const

type MarginProps = {
  length: (typeof lengthOptions)[number]
} & HTMLAttributes<HTMLElement>

const Margin = ({ children, length }: MarginProps) => <span className={`ams-mb--${length}`}>{children}</span>

const render = ({ length }: MarginProps) => [
  <h1 className={`ams-heading ams-heading--2 ams-mb--${length}`}>This heading has a bottom margin</h1>,
  <Paragraph>It introduces white space between the heading and this paragraph below.</Paragraph>,
]

const meta = {
  title: 'Utilities/CSS/Margin',
  component: Margin,
  args: {
    length: 'xs',
  },
  argTypes: {
    length: {
      control: 'radio',
      description: 'The amount of white space to add below the element.',
      options: lengthOptions,
    },
  },
} satisfies Meta<typeof Margin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
