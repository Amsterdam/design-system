import { FromScratch } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { argTypes } from './argTypes'

import '@amsterdam/components-css/src/from-scratch/from-scratch.scss'

export default {
  title: 'React Components/FromScratch',
  id: 'from-scratch',
  component: FromScratch,
  argTypes,
} as ComponentMeta<typeof FromScratch>

const Template: ComponentStory<typeof FromScratch> = (args) => <FromScratch {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click me!',
  variant: 'primary',
  small: false,
  disabled: false,
}
