import { Button } from '@amsterdam/design-system-react/src'
import { ComponentStory } from '@storybook/react'
import '@amsterdam/design-system-css/src/button/button.scss'

export default {
  title: 'Button',
  id: 'Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Hello Amsterdam',
}
