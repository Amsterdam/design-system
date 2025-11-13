/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card, Paragraph } from '@amsterdam/design-system-react'
import { UnorderedList } from '@amsterdam/design-system-react/src'

import { exampleUnorderedList } from '../shared/exampleContent'

const unorderedListItems = exampleUnorderedList().map((text) => (
  <UnorderedList.Item key={text}>{text}</UnorderedList.Item>
))

const meta = {
  title: 'Components/Text/Unordered List',
  component: UnorderedList,
  args: {
    children: unorderedListItems,
    markers: undefined,
  },
  argTypes: {
    size: {
      control: {
        labels: { small: 'small', undefined: 'medium' },
        type: 'radio',
      },
      options: ['small', undefined],
    },
  },
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const TwoLevels: Story = {
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.Item>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
      <UnorderedList.Item>
        Stadsdeel Nieuw-West
        <UnorderedList {...args}>
          <UnorderedList.Item>De Aker, Sloten en Nieuw Sloten</UnorderedList.Item>
          <UnorderedList.Item>Geuzenveld, Slotermeer en Sloterdijken</UnorderedList.Item>
          <UnorderedList.Item>Osdorp</UnorderedList.Item>
          <UnorderedList.Item>Slotervaart</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
  ),
}

export const WithoutMarkers: Story = {
  args: {
    children: [
      <UnorderedList.Item key={1}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Weg met steen, hallo extra groen en koelte</Card.Link>
          </Card.Heading>
          <Paragraph>
            Sinds 2021 kwamen er maar liefst 60 nieuwe groene plekken bij in de stad. Groen is fijn en het verkoelt de
            stad in de zomer. Een paar voorbeelden.
          </Paragraph>
          <Paragraph size="small">16 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Amsterdam bindt de strijd aan met lawaaierige voertuigen</Card.Link>
          </Card.Heading>
          <Paragraph>
            Deze zomer testen we of digitale borden langs de weg kunnen helpen om geluidsoverlast van voertuigen zoals
            motoren en auto’s tegen te gaan.
          </Paragraph>
          <Paragraph size="small">10 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>,
      <UnorderedList.Item key={3}>
        <Card>
          <Card.Heading level={2}>
            <Card.Link href="#">Een prachtroute door de wonderlijke Baarsjes</Card.Link>
          </Card.Heading>
          <Paragraph>
            In de Baarsjes zijn kunst en cultuur met elkaar vervlochten. We zetten een prachtige wandelroute voor u uit
            en laten zien hoe het was en hoe het nu is.
          </Paragraph>
          <Paragraph size="small">8 augustus 2023</Paragraph>
        </Card>
      </UnorderedList.Item>,
    ],
    className: 'ams-gap-xl',
    markers: false,
    style: { maxInlineSize: '32rem' },
  },
}

export const InverseColor: Story = {
  args: {
    color: 'inverse',
  },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.Item>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
  ),
}

export const SmallText: Story = {
  args: {
    size: 'small',
  },
}
