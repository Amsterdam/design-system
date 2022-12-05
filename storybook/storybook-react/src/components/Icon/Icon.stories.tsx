import { Icon } from '@amsterdam/components-react/src'
import { Email } from '@amsterdam/icons-react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/components-css/icon/icon.scss'

export default {
  title: 'React Components/Icon',
  id: 'icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <Email />
  </Icon>
)

export const Default = Template.bind({})
