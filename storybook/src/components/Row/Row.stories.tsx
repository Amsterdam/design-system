/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar, Heading, Link } from '@amsterdam/design-system-react'
import { Row } from '@amsterdam/design-system-react/src'
import { crossAlignOptions, mainAlignOptions } from '@amsterdam/design-system-react/src/common/types'
import { Meta, StoryObj } from '@storybook/react'

const ThreeItems = [
  <div key={0} className="ams-docs-item" />,
  <div key={1} className="ams-docs-item" />,
  <div key={2} className="ams-docs-item" />,
]

const meta = {
  title: 'Components/Layout/Row',
  component: Row,
  args: {
    children: ThreeItems,
    className: 'ams-docs-row',
  },
  argTypes: {
    align: {
      control: {
        labels: { undefined: 'start' },
        type: 'radio',
      },
      options: [undefined, ...mainAlignOptions],
    },
    alignVertical: {
      control: {
        labels: { undefined: 'stretch' },
        type: 'radio',
      },
      options: [undefined, ...crossAlignOptions],
    },
    className: {
      table: { disable: true },
    },
    gap: {
      control: {
        labels: { undefined: 'medium' },
        type: 'radio',
      },
      options: ['none', 'extra-small', 'small', undefined, 'large', 'extra-large'],
    },
  },
} satisfies Meta<typeof Row>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Alignment: Story = {
  args: {
    align: 'evenly',
  },
}

export const EndAlignASingleChild: Story = {
  args: {
    align: 'end',
    alignVertical: 'center',
    children: <Avatar label="AB" />,
  },
}

export const EndAlignASingleChildRtl: Story = {
  args: {
    align: 'end',
    dir: 'rtl',
  },
  argTypes: {
    dir: { table: { disable: true } },
  },
}

export const AlignOpposingTexts: Story = {
  args: {
    align: 'between',
    alignVertical: 'baseline',
    children: [<Heading level={3}>An example heading</Heading>, <Link href="#">An example link</Link>],
    className: undefined,
    wrap: true,
  },
}

export const VerticalAlignment: Story = {
  args: {
    alignVertical: 'center',
  },
}

export const Wrapping: Story = {
  args: {
    children: Array.from(Array(4).keys()).map((i) => (
      <span key={i} className="ams-docs-item" style={{ flexBasis: '16rem' }} />
    )),
    wrap: true,
  },
}
