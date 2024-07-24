/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { MarginProps } from './Margin'
import { Margin } from './Margin'

const render = ({ size }: MarginProps) => (
  <>
    <Heading className={`ams-mb--${size}`} level={2}>
      This heading has a bottom margin
    </Heading>
    <Paragraph>It introduces white space between the heading and this paragraph below.</Paragraph>
  </>
)

const meta = {
  title: 'Utilities/CSS/Margin',
  component: Margin,
  args: {
    size: 'xs',
  },
} satisfies Meta<typeof Margin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
