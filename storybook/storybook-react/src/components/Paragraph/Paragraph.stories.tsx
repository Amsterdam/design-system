import { Paragraph } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

export default {
  title: 'Paragraph',
  id: 'paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
}
