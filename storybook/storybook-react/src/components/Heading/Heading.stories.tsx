import { Heading } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/components-css/heading/heading.scss'

export default {
  title: 'React Components/Heading',
  id: 'heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Heading',
}
