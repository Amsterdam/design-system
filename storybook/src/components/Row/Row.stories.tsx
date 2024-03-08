/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Button, Card, Heading, Paragraph, Row } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const ThreeButtons = Array.from(Array(3).keys()).map((i) => <Button key={i}>Button {i + 1}</Button>)

const meta = {
  title: 'Components/Layout/Row',
  component: Row,
  args: {
    children: ThreeButtons,
  },
  argTypes: {
    as: {
      control: { type: 'radio' },
      options: ['article', 'div', 'section'],
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
    gap: 'extra-large',
  },
}
