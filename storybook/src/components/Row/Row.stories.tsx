/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, Paragraph, Row } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const ThreeButtons = Array.from(Array(3).keys()).map((i) => <Button key={i}>Button {i + 1}</Button>)

const FourBoxes = Array.from(Array(4).keys()).map((i) => (
  <Paragraph className="ams-docs-pink-box" key={i}>
    Wrapping row item {i + 1}
  </Paragraph>
))

const meta = {
  title: 'Components/Layout/Row',
  component: Row,
  args: {
    children: ThreeButtons,
  },
  argTypes: {
    gap: {
      control: 'radio',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
  },
} satisfies Meta<typeof Row>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Wrapping: Story = {
  args: {
    children: FourBoxes,
    wrap: true,
  },
}
