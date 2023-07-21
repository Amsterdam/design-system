/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, List, Paragraph } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'List',
  id: 'list',
  component: List,
} satisfies Meta<typeof List>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <li>
          <Heading size="level-4">Parkeren</Heading>
          <Paragraph>Alles over parkeren en verkeer in de stad.</Paragraph>
        </li>
        <li>
          <Heading size="level-4">Parkeertijd bezoek doorgeven</Heading>
          <Paragraph>Bezoekers- of kraskaart-vergunning? Geef hier parkeertijd van uw bezoek door.</Paragraph>
        </li>
        <li>
          <Heading size="level-4">Verhuizing doorgeven</Heading>
          <Paragraph>Naar en binnen Amsterdam.</Paragraph>
        </li>
      </>
    ),
  },
}
