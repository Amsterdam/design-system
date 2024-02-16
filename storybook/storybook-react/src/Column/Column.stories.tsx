/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { Card, Column, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const ThreeBoxes = Array.from(Array(3).keys()).map((i) => (
  <Paragraph className="amsterdam-docs-pink-box" key={i}>
    {i + 1}
  </Paragraph>
))

const meta = {
  title: 'Layout/Column',
  component: Column,
  args: {
    children: ThreeBoxes,
  },
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
    },
    children: {
      table: { disable: true },
    },
    gap: {
      control: 'radio',
      options: ['extra-small', 'small', 'medium', 'large', 'extra-large'],
    },
  },
} satisfies Meta<typeof Column>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomTagName: Story = {
  args: {
    as: 'section',
    children: [
      <Card key="2023-07-01">
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-3">
            <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
          </Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
        <Paragraph size="small">Gepubliceerd: 1 juli 2023</Paragraph>
      </Card>,
      <Card key="2023-06-15">
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-3">
            <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
          </Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
        <Paragraph size="small">Gepubliceerd: 15 juni 2023</Paragraph>
      </Card>,
    ],
  },
}
