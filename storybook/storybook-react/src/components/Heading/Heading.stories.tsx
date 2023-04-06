/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/heading/heading.scss'

export default {
  title: 'Heading',
  id: 'heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Heading1 = Template.bind({})

Heading1.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
}

export const Heading2 = Template.bind({})

Heading2.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 2,
}

export const Heading3 = Template.bind({})

Heading3.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 3,
}

export const Heading4 = Template.bind({})

Heading4.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 4,
}

export const Heading5 = Template.bind({})

Heading5.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 5,
}

export const Heading6 = Template.bind({})

Heading6.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 6,
}
