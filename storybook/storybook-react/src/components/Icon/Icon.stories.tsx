/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react/src'
import { Email } from '@amsterdam/design-system-react-icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/icon/icon.scss'

export default {
  title: 'Icon',
  id: 'icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>
    <Email />
  </Icon>
)

export const Default = Template.bind({})
