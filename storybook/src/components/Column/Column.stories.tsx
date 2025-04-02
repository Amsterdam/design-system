/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Column } from '@amsterdam/design-system-react/src'
import { columnGaps } from '@amsterdam/design-system-react/src/Column/Column'
import { crossAlignOptionsForColumn, mainAlignOptions } from '@amsterdam/design-system-react/src/common/types'
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
        labels: { undefined: 'start' },
        type: 'radio',
      },
      options: [undefined, ...mainAlignOptions],
    },
    alignHorizontal: {
      control: {
        labels: { undefined: 'stretch' },
        type: 'radio',
      },
      options: [undefined, ...crossAlignOptionsForColumn],
    },
    className: {
      table: { disable: true },
    },
    gap: {
      control: {
        labels: { undefined: 'medium' },
        type: 'radio',
      },
      options: [undefined, ...columnGaps],
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

export const ImproveSemantics: Story = {
  args: {
    as: 'section',
    children: [
      <Heading className="ams-mb-s" key={1} level={3}>
        Zoekresultaten
      </Heading>,
      <Card key={2}>
        <Heading className="ams-mb-s" level={4}>
          <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
        </Heading>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
      </Card>,
      <Card key={3}>
        <Heading className="ams-mb-s" level={4}>
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
