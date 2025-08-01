/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Card, Paragraph } from '@amsterdam/design-system-react'
import { OrderedList } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { exampleOrderedList } from '../shared/exampleContent'

const orderedListItems = exampleOrderedList().map((text) => <OrderedList.Item key={text}>{text}</OrderedList.Item>)

const meta = {
  title: 'Components/Text/Ordered List',
  component: OrderedList,
  args: {
    children: orderedListItems,
    markers: undefined,
    reversed: undefined,
    start: undefined,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
    reversed: {
      control: 'boolean',
      description: 'Numbers the items from the highest value down.',
    },
    size: {
      control: {
        labels: { small: 'small', undefined: 'medium' },
        type: 'radio',
      },
      options: ['small', undefined],
    },
    start: {
      control: 'number',
      description: 'The value for the first list item’s marker.',
    },
  },
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoLevels: Story = {
  render: (args) => (
    <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
      <OrderedList.Item>
        Stadsdeel Nieuw-West
        <OrderedList {...args}>
          <OrderedList.Item>De Aker, Sloten en Nieuw Sloten</OrderedList.Item>
          <OrderedList.Item>Geuzenveld, Slotermeer en Sloterdijken</OrderedList.Item>
          <OrderedList.Item>Osdorp</OrderedList.Item>
          <OrderedList.Item>Slotervaart</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
  ),
}

export const StartingNumber: Story = {
  args: {
    children: [
      <OrderedList.Item key={6}>Zes</OrderedList.Item>,
      <OrderedList.Item key={7}>Zeven</OrderedList.Item>,
      <OrderedList.Item key={8}>Acht</OrderedList.Item>,
    ],
    start: 6,
  },
}

export const DescendingNumbers: Story = {
  args: {
    children: [
      <OrderedList.Item key={3}>Drie</OrderedList.Item>,
      <OrderedList.Item key={2}>Twee</OrderedList.Item>,
      <OrderedList.Item key={1}>Eén</OrderedList.Item>,
    ],
    reversed: true,
    start: 3,
  },
}

export const WithoutMarkers: Story = {
  args: {
    children: [
      <OrderedList.Item key={1}>
        <Card>
          <Card.Heading level={2}>Weg met steen, hallo extra groen en koelte</Card.Heading>
          <Paragraph>
            Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
            stad in de zomer. Een paar voorbeelden.
          </Paragraph>
          <Paragraph size="small">16 augustus 2023</Paragraph>
        </Card>
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
        <Card>
          <Card.Heading level={1}>Amsterdam bindt de strijd aan met lawaaierige voertuigen</Card.Heading>
          <Paragraph>
            Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
            motoren en auto’s tegen te gaan.
          </Paragraph>
          <Paragraph size="small">10 augustus 2023</Paragraph>
        </Card>
      </OrderedList.Item>,
      <OrderedList.Item key={3}>
        <Card>
          <Card.Heading level={1}>Een prachtroute door de wonderlijke Baarsjes</Card.Heading>
          <Paragraph>
            In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit
            en laten zien hoe het was en hoe het nu is.
          </Paragraph>
          <Paragraph size="small">8 augustus 2023</Paragraph>
        </Card>
      </OrderedList.Item>,
    ],
    className: 'ams-gap-xl',
    markers: false,
    style: { maxInlineSize: '32rem' },
  },
  argTypes: {
    style: {
      table: { disable: true },
    },
  },
}

export const InverseColor: Story = {
  args: {
    color: 'inverse',
  },
  render: (args) => (
    <OrderedList {...args}>
      <OrderedList.Item>
        Stadsdeel West
        <OrderedList {...args}>
          <OrderedList.Item>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>
    </OrderedList>
  ),
}

export const SmallText: Story = {
  args: {
    size: 'small',
  },
}
