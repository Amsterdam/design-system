/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, OrderedList, Paragraph } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'
import { exampleOrderedList } from '../shared/exampleContent'

const orderedList = exampleOrderedList().map((text, index) => <OrderedList.Item key={index}>{text}</OrderedList.Item>)

const meta = {
  title: 'Text/Ordered List',
  component: OrderedList,
  args: {
    children: orderedList,
    inverseColor: false,
  },
  argTypes: {
    markers: { control: 'boolean' },
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof OrderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoLevels: Story = {
  args: {
    children: [
      <OrderedList.Item key={1}>
        Stadsdeel West
        <OrderedList>
          <OrderedList.Item key={1.1}>Bos en Lommer</OrderedList.Item>
          <OrderedList.Item key={1.2}>Oud West / De Baarsjes</OrderedList.Item>
          <OrderedList.Item key={1.3}>Westerpark</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
        Stadsdeel Nieuw-West
        <OrderedList>
          <OrderedList.Item key={2.1}>De Aker, Sloten en Nieuw Sloten</OrderedList.Item>
          <OrderedList.Item key={2.2}>Geuzenveld, Slotermeer en Sloterdijken</OrderedList.Item>
          <OrderedList.Item key={2.3}>Osdorp</OrderedList.Item>
          <OrderedList.Item key={2.4}>Slotervaart</OrderedList.Item>
        </OrderedList>
      </OrderedList.Item>,
    ],
  },
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
      <OrderedList.Item key={0}>
        <Heading size="level-4">Weg met steen, hallo extra groen en koelte</Heading>
        <Paragraph>
          Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
          stad in de zomer. Een paar voorbeelden.
        </Paragraph>
        <Paragraph size="small">16 augustus 2023</Paragraph>
      </OrderedList.Item>,
      <OrderedList.Item key={1}>
        <Heading size="level-4">Amsterdam bindt de strijd aan met lawaaierige voertuigen</Heading>
        <Paragraph>
          Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
          motoren en auto’s tegen te gaan.
        </Paragraph>
        <Paragraph size="small">10 augustus 2023</Paragraph>
      </OrderedList.Item>,
      <OrderedList.Item key={2}>
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
