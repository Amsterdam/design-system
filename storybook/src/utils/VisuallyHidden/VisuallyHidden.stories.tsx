/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import type { HTMLAttributes } from 'react'

type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => <span className="ams-visually-hidden">{children}</span>

const render = ({ children }: VisuallyHiddenProps) => (
  <div>
    <Paragraph>
      This paragraph is available for everyone. Below this is a second paragraph, but it is aimed at non-visual user
      agents only. It is not perceivable on a screen.
    </Paragraph>
    <Paragraph className="ams-visually-hidden">{children}</Paragraph>
  </div>
)

const meta = {
  title: 'Utilities/CSS/Visually Hidden',
  component: VisuallyHidden,
  args: {
    children: 'Here is the paragraph that is visually hidden. A screen reader will pick it up and read it to its user.',
  },
  argTypes: {
    children: {
      description: 'The content to hide visually.',
      table: { disable: false },
    },
  },
} satisfies Meta<typeof VisuallyHidden>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
