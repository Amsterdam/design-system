import { Link } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

export default {
  title: 'Link',
  id: 'link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link href="#" {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Jouw typograaf biedt mij zulke exquise schreven!',
}
