import { List } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/list/list.scss'

export default {
  title: 'List',
  id: 'list',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})

Default.args = {
  children: (
    <>
      <li>Rijbewijs verlengen</li>
      <li>Verhuizing doorgeven</li>
      <li>Parkeertijd bezoek doorgeven</li>
    </>
  ),
}
