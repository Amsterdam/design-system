import { ExistingWithBem } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { argTypes } from './argTypes'

import '@amsterdam/components-css/existing-with-bem/existing-with-bem.scss'

export default {
  title: 'React Components/ExistingWithBem',
  id: 'react-existing-with-bem',
  component: ExistingWithBem,
  argTypes,
} as ComponentMeta<typeof ExistingWithBem>

const Template: ComponentStory<typeof ExistingWithBem> = (args) => <ExistingWithBem {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click me!',
  variant: 'primary',
  small: false,
  disabled: false,
}
