/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon, Paragraph } from '@aram-limpens/design-system-react'
import { UnorderedList } from '@aram-limpens/design-system-react/src'
import {
  CarIcon,
  DocumentEuroIcon,
  HouseIcon,
  MapMarkerOnMapIcon,
  MegaphoneIcon,
  PassportIcon,
  TrashBinIcon,
  WarningIcon,
} from '@aram-limpens/design-system-react-icons'
import type { Meta, StoryObj } from '@storybook/react'
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
        <div className="ams-docs-card">
          <Icon svg={MapMarkerOnMapIcon} />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        <div className="ams-docs-card">
          <Icon svg={CarIcon} />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={3}>
        <div className="ams-docs-card">
          <Icon svg={PassportIcon} />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={4}>
        <div className="ams-docs-card">
          <Icon svg={DocumentEuroIcon} />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={5}>
        <div className="ams-docs-card">
          <Icon svg={WarningIcon} />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={6}>
        <div className="ams-docs-card">
          <Icon svg={HouseIcon} />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={7}>
        <div className="ams-docs-card">
          <Icon svg={TrashBinIcon} />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={8}>
        <div className="ams-docs-card">
          <Icon svg={MegaphoneIcon} />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>,
    ],
    markers: false,
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
