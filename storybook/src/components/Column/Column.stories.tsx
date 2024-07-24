/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Column } from '@amsterdam/design-system-react/src'
import { crossAlignOptionsForColumn, mainAlignOptions } from '@amsterdam/design-system-react/src/common/layout'
import { Meta, StoryObj } from '@storybook/react'

const ThreeItems = [
  <div className="ams-docs-item" key={0} />,
  <div className="ams-docs-item" key={1} />,
  <div className="ams-docs-item" key={2} />,
]

const meta = {
  title: 'Components/Layout/Column',
  component: Column,
  args: {
    children: ThreeItems,
    className: 'ams-docs-column',
  },
  argTypes: {
    align: {
      control: {
        type: 'radio',
        labels: { undefined: 'start' },
      },
      options: [undefined, ...mainAlignOptions],
    },
    alignHorizontal: {
      control: {
        type: 'radio',
        labels: { undefined: 'stretch' },
      },
      options: [undefined, ...crossAlignOptionsForColumn],
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
} satisfies Meta<typeof Column>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Alignment: Story = {
  args: {
    align: 'center',
  },
}

export const HorizontalAlignment: Story = {
  args: {
    alignHorizontal: 'center',
  },
}

export const CustomTagName: Story = {
  args: {
    as: 'section',
    children: [
      <Heading level={3}>Zoekresultaten</Heading>,
      <Card key={1}>
        <Heading level={4}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>,
      <Card key={2}>
        <Heading level={4}>
          <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
        </Heading>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
      </Card>,
    ],
    className: undefined,
  },
}
