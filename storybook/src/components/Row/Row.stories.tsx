/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar, Heading, Link } from '@amsterdam/design-system-react'
import { Row } from '@amsterdam/design-system-react/src'
import { crossAlignOptions, mainAlignOptions } from '@amsterdam/design-system-react/src/common/layout'
import { Meta, StoryObj } from '@storybook/react'

const ThreeItems = [
  <div className="ams-docs-item" key={0} />,
  <div className="ams-docs-item" key={1} />,
  <div className="ams-docs-item" key={2} />,
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
        type: 'radio',
        labels: { undefined: 'start' },
      },
      options: [undefined, ...mainAlignOptions],
    },
    alignVertical: {
      control: {
        type: 'radio',
        labels: { undefined: 'stretch' },
      },
      options: [undefined, ...crossAlignOptions],
    },
    className: {
      table: { disable: true },
    },
    gap: {
      control: {
        type: 'radio',
        labels: { undefined: 'medium' },
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
      <span className="ams-docs-item" key={i} style={{ flexBasis: '16rem' }} />
    )),
    wrap: true,
  },
}
