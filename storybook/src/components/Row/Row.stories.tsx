/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Avatar, Heading, Link, Row } from '@amsterdam/design-system-react/src'
import { crossAlignOptions, mainAlignOptions } from '@amsterdam/design-system-react/src/common/layout'
import { Meta, StoryObj } from '@storybook/react'

const ThreeItems = [
  <div className="ams-docs-row-child ams-docs-row-child" key={0} />,
  <div className="ams-docs-row-child ams-docs-row-child" key={1} />,
  <div className="ams-docs-row-child ams-docs-row-child" key={2} />,
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
      options: [undefined, ...crossAlignOptions.filter((option) => option !== 'baseline')],
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
  argTypes: {
    alignVertical: { table: { disable: true } },
    as: { table: { disable: true } },
    gap: { table: { disable: true } },
    wrap: { table: { disable: true } },
  },
}

export const EndAlignASingleChild: Story = {
  args: {
    align: 'end',
    alignVertical: 'center',
    children: <Avatar label="AB" />,
  },
  argTypes: {
    alignVertical: { table: { disable: true } },
    as: { table: { disable: true } },
    gap: { table: { disable: true } },
    wrap: { table: { disable: true } },
  },
}

export const EndAlignASingleChildRtl: Story = {
  args: {
    align: 'end',
    dir: 'rtl',
  },
  argTypes: {
    alignVertical: { table: { disable: true } },
    as: { table: { disable: true } },
    dir: { table: { disable: true } },
    gap: { table: { disable: true } },
    wrap: { table: { disable: true } },
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
  argTypes: {
    alignVertical: { table: { disable: true } },
    as: { table: { disable: true } },
    gap: { table: { disable: true } },
    wrap: { table: { disable: true } },
  },
}

export const VerticalAlignment: Story = {
  args: {
    alignVertical: 'center',
  },
  argTypes: {
    align: { table: { disable: true } },
    as: { table: { disable: true } },
    gap: { table: { disable: true } },
    wrap: { table: { disable: true } },
  },
}

export const Wrapping: Story = {
  args: {
    children: Array.from(Array(4).keys()).map((i) => (
      <span className="ams-docs-row-child" key={i} style={{ flexBasis: '16rem' }} />
    )),
    wrap: true,
  },
  argTypes: {
    align: { table: { disable: true } },
    alignVertical: { table: { disable: true } },
    as: { table: { disable: true } },
    gap: { table: { disable: true } },
  },
}
