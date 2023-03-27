/**
 * @license EUPL-1.2
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

export const Default = Template.bind({})

Default.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
}
