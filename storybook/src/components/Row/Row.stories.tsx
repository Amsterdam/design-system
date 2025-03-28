/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar, Heading, Link } from '@amsterdam/design-system-react'
import { Row } from '@amsterdam/design-system-react/src'
import { rowGaps } from '@amsterdam/design-system-react/src/Row/Row'
import { crossAlignOptions, mainAlignOptions } from '@amsterdam/design-system-react/src/common/types'
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
      options: [undefined, ...rowGaps],
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
    children: [
      <Heading key={1} level={3}>
        An example heading
      </Heading>,
      <Link href="#" key={2}>
        An example link
      </Link>,
    ],
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
