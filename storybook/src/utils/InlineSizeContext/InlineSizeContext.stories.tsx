/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import type { InlineSizeContextProps } from './InlineSizeContext'

import { InlineSizeContext } from './InlineSizeContext'

const render = ({ children }: InlineSizeContextProps) => (
  <div className="ams-inline-size-context" style={{ maxInlineSize: '24rem' }}>
    {children}
  </div>
)

const meta = {
  title: 'Utilities/CSS/Inline Size Context',
  component: InlineSizeContext,
  args: {
    children: (
      <Paragraph>
        This Paragraph sits inside an Inline Size Context, which establishes a containment context of type
        `inline-size`. Descendants can query its inline size:
        <br />
        <br />
        <code>@container ams-inline-size-context (min-inline-size: …)</code>.
      </Paragraph>
    ),
  },
} satisfies Meta<typeof InlineSizeContext>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
