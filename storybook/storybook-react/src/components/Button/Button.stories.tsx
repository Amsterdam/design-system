/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Button } from '@amsterdam/design-system-react/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import '@amsterdam/design-system-css/src/button/button.scss'

export default {
  title: 'Button',
  id: 'button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const ButtonDefault = Template.bind({})
