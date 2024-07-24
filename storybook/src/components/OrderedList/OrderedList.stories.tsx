/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { OrderedList } from '@amsterdam/design-system-react/src'
import type { Meta, StoryObj } from '@storybook/react'
import { inverseColorDecorator } from '../shared/decorators'
import { exampleOrderedList } from '../shared/exampleContent'

const orderedListItems = exampleOrderedList().map((text, index) => (
  <OrderedList.Item key={index}>{text}</OrderedList.Item>
))

const meta = {
  title: 'Components/Text/Ordered List',
  component: OrderedList,
  args: {
    children: orderedListItems,
    inverseColor: false,
    markers: undefined,
    reversed: undefined,
    start: undefined,
  },
  argTypes: {
    reversed: {
      control: 'boolean',
      description: 'Numbers the items from the highest value down.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    start: {
      control: 'number',
      description: 'The value for the first list item’s marker.',
    },
    size: {
      control: {
        type: 'radio',
        labels: { small: 'small', undefined: 'medium' },
      },
      options: ['small', undefined, 'large'],
    },
  },
  decorators: [inverseColorDecorator],
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

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
        <Heading size="level-4">Weg met steen, hallo extra groen en koelte</Heading>
        <Paragraph>
          Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
          stad in de zomer. Een paar voorbeelden.
        </Paragraph>
        <Paragraph size="small">16 augustus 2023</Paragraph>
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
        <Heading size="level-4">Amsterdam bindt de strijd aan met lawaaierige voertuigen</Heading>
        <Paragraph>
          Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
          motoren en auto’s tegen te gaan.
        </Paragraph>
        <Paragraph size="small">10 augustus 2023</Paragraph>
      </OrderedList.Item>,
      <OrderedList.Item key={3}>
        <Heading size="level-4">Een prachtroute door de wonderlijke Baarsjes</Heading>
        <Paragraph>
          In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit en
          laten zien hoe het was en hoe het nu is.
        </Paragraph>
        <Paragraph size="small">8 augustus 2023</Paragraph>
      </OrderedList.Item>,
    ],
    markers: false,
  },
}

export const InverseColor: Story = {
  args: {
    inverseColor: true,
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
