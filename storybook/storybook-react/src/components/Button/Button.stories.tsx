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
  args: {
    children: 'Default',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonDefault = Template.bind({})

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  children: 'Primary',
  variant: 'primary',
}

export const ButtonPrimaryDisabled = Template.bind({})

ButtonPrimaryDisabled.args = {
  children: 'Primary Disabled',
  variant: 'primary',
  disabled: true,
}

export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
  children: 'Secondary',
  variant: 'secondary',
}

export const ButtonSecondaryDisabled = Template.bind({})

ButtonSecondaryDisabled.args = {
  children: 'Secondary Disabled',
  variant: 'secondary',
  disabled: true,
}
