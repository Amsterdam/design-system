import { Paragraph } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/components-css/paragraph/paragraph.scss'

export default {
  title: 'React Components/Paragraph',
  id: 'paragraph',
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Hic sunt dracones!',
}
