import { ExistingWithTokens } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { argTypes } from './argTypes'

import '@utrecht/components/button-link/css/index.scss'

export default {
  title: 'React Components/ExistingWithTokens',
  id: 'react-button',
  component: ExistingWithTokens,
  argTypes,
} as ComponentMeta<typeof ExistingWithTokens>

const Template: ComponentStory<typeof ExistingWithTokens> = (args) => <ExistingWithTokens {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click me!',
  variant: 'primary',
}
