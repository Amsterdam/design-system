/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Heading, Paragraph } from '@amsterdam/design-system-react'
import { Column } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const ThreeBoxes = Array.from(Array(3).keys()).map((i) => (
  <Paragraph className="ams-docs-pink-box" key={i}>
    {i + 1}
  </Paragraph>
))

const meta = {
  title: 'Components/Layout/Column',
  component: Column,
  args: {
    children: ThreeBoxes,
  },
  argTypes: {
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
      <Card key={1}>
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
      <Card key={2}>
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
