/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import type { BodyProps } from './Body'

import { Body } from './Body'

const render = (props: BodyProps) => <body {...props} className="ams-body" />

const meta = {
  title: 'Utilities/CSS/Body',
  component: Body,
} satisfies Meta<typeof Body>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Paragraph>This is the content of the HTML `&lt;body&gt;` element.</Paragraph>,
  },
  render,
}
