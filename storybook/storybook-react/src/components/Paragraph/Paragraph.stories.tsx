/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

export default {
  title: 'Paragraph',
  id: 'paragraph',
  component: Paragraph,
  argTypes: {
    size: {
      control: { type: 'select', labels: { undefined: 'default', large: 'large', small: 'small' } },
      options: [undefined, 'large', 'small'],
    },
  },
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
}

export const Large = Template.bind({})

Large.args = {
  ...Default.args,
  size: 'large',
}

export const Small = Template.bind({})

Small.args = {
  ...Default.args,
  size: 'small',
}
