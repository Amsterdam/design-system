/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Unordered List',
  component: UnorderedList,
  argTypes: { noMarkers: { control: 'boolean' } },
  args: {
    children: [
      <UnorderedList.Item key={0}>
        Dit is het eerste niveau opsommingsteken.
        <UnorderedList>
          <UnorderedList.Item key={1.1}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
      <UnorderedList.Item key={1}>Dit is het eerste niveau opsommingsteken.</UnorderedList.Item>,
      <UnorderedList.Item key={2}>Dit is het eerste niveau opsommingsteken.</UnorderedList.Item>,
      <UnorderedList.Item key={3}>
        Dit is het eerste niveau opsommingsteken.
        <UnorderedList>
          <UnorderedList.Item key={1.1}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Dit is het tweede niveau opsommingsteken.</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
    ],
  },
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoMarkers: Story = {
  args: {
    noMarkers: true,
    children: [
      <UnorderedList.Item key={0}>
        <Heading size="level-4">Parkeren</Heading>
        <Paragraph>Alles over parkeren en verkeer in de stad.</Paragraph>
      </UnorderedList.Item>,
      <UnorderedList.Item key={1}>
        <Heading size="level-4">Parkeertijd bezoek doorgeven</Heading>
        <Paragraph>Bezoekers- of kraskaart-vergunning? Geef hier parkeertijd van uw bezoek door.</Paragraph>
      </UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        <Heading size="level-4">Verhuizing doorgeven</Heading>
        <Paragraph>Naar en binnen Amsterdam.</Paragraph>
      </UnorderedList.Item>,
    ],
  },
}
