/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, List, Paragraph } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/list/list.scss'

export default {
  title: 'List',
  id: 'list',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <li>
        <Heading styleLevel={5}>Parkeren</Heading>
        <Paragraph>Alles over parkeren en verkeer in de stad.</Paragraph>
      </li>
      <li>
        <Heading styleLevel={5}>Parkeertijd bezoek doorgeven</Heading>
        <Paragraph>Bezoekers- of kraskaart-vergunning? Geef hier parkeertijd van uw bezoek door.</Paragraph>
      </li>
      <li>
        <Heading styleLevel={5}>Verhuizing doorgeven</Heading>
        <Paragraph>Naar en binnen Amsterdam.</Paragraph>
      </li>
    </>
  ),
}
