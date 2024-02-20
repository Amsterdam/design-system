/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import {
  AlertIcon,
  AnnouncementIcon,
  CarIcon,
  DocumentEuroSignIcon,
  HousingIcon,
  LocationIcon,
  PassportIcon,
  TrashBinIcon,
} from '@amsterdam/design-system-react-icons'
import type { Meta, StoryObj } from '@storybook/react'
import { exampleUnorderedList } from '../shared/exampleContent'

const unorderedListItems = exampleUnorderedList().map((text, index) => (
  <UnorderedList.Item key={index}>{text}</UnorderedList.Item>
))

const meta = {
  title: 'Text/Unordered List',
  component: UnorderedList,
  args: {
    inverseColor: false,
    markers: undefined,
  },
  argTypes: {
    inverseColor: { control: 'boolean' },
    markers: { control: 'boolean' },
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'amsterdam-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => <UnorderedList {...args}>{unorderedListItems}</UnorderedList>,
}

export const TwoLevels: Story = {
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.Item key={1}>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item key={1.1}>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item key={1.3}>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
      <UnorderedList.Item key={2}>
        Stadsdeel Nieuw-West
        <UnorderedList {...args}>
          <UnorderedList.Item key={2.1}>De Aker, Sloten en Nieuw Sloten</UnorderedList.Item>
          <UnorderedList.Item key={2.2}>Geuzenveld, Slotermeer en Sloterdijken</UnorderedList.Item>
          <UnorderedList.Item key={2.3}>Osdorp</UnorderedList.Item>
          <UnorderedList.Item key={2.4}>Slotervaart</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
  ),
}

export const WithoutMarkers: Story = {
  args: {
    markers: false,
  },
  argTypes: {
    inverseColor: {
      table: { disable: true },
    },
  },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.Item key={1}>
        <div className="amsterdam-docs-card">
          <Icon svg={LocationIcon} size="level-6" />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={2}>
        <div className="amsterdam-docs-card">
          <Icon svg={CarIcon} size="level-6" />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={3}>
        <div className="amsterdam-docs-card">
          <Icon svg={PassportIcon} size="level-6" />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={4}>
        <div className="amsterdam-docs-card">
          <Icon svg={DocumentEuroSignIcon} size="level-6" />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={5}>
        <div className="amsterdam-docs-card">
          <Icon svg={AlertIcon} size="level-6" />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={6}>
        <div className="amsterdam-docs-card">
          <Icon svg={HousingIcon} size="level-6" />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={7}>
        <div className="amsterdam-docs-card">
          <Icon svg={TrashBinIcon} size="level-6" />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>
      <UnorderedList.Item key={8}>
        <div className="amsterdam-docs-card">
          <Icon svg={AnnouncementIcon} size="level-6" />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>
    </UnorderedList>
  ),
}

export const InverseColor: Story = {
  args: {
    inverseColor: true,
  },
  render: (args) => (
    <UnorderedList {...args}>
      <UnorderedList.Item key={1}>
        Stadsdeel West
        <UnorderedList {...args}>
          <UnorderedList.Item key={1.1}>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item key={1.3}>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>
    </UnorderedList>
  ),
}
