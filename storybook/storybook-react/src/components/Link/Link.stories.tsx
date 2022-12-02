import { Link } from '@amsterdam/components-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/components-css/link/link.scss'

export default {
  title: 'React Components/Link',
  id: 'link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link href="#" {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Link',
}
