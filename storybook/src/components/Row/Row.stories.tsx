/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, crossAlignOptions, mainAlignOptions, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const ThreeButtons = Array.from(Array(3).keys()).map((i) => <Button key={i}>Button {i + 1}</Button>)
const ThreeParagraphs = [
  <Paragraph className="ams-docs-pink-box" key={1} style={{ inlineSize: '8rem' }}>
    One line
  </Paragraph>,
  <Paragraph className="ams-docs-pink-box" key={2} style={{ inlineSize: '8rem' }}>
    Two
    <br />
    lines
  </Paragraph>,
  <Paragraph className="ams-docs-pink-box" key={3} style={{ inlineSize: '8rem' }}>
    One line
  </Paragraph>,
]

const meta = {
  title: 'Components/Layout/Row',
  component: Row,
  args: {
    children: ThreeButtons,
  },
  argTypes: {
    align: {
      control: 'radio',
      options: mainAlignOptions,
    },
    alignVertical: {
      control: 'radio',
      options: crossAlignOptions,
    },
    gap: {
      control: 'radio',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
  },
} satisfies Meta<typeof Row>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HorizontalAlignment: Story = {
  args: {
    align: 'evenly',
    children: ThreeParagraphs,
  },
}

export const VerticalAlignment: Story = {
  args: {
    alignVertical: 'center',
    children: ThreeParagraphs,
  },
}

export const Wrapping: Story = {
  args: {
    children: Array.from(Array(4).keys()).map((i) => (
      <Paragraph className="ams-docs-pink-box" key={i} style={{ inlineSize: '16rem' }} />
    )),
    wrap: true,
  },
}
