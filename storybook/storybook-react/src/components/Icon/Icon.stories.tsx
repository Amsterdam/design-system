/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react/src'
import { Email } from '@amsterdam/design-system-react-icons'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Icon',
  id: 'icon',
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Icon> = (args) => (
  <Icon {...args}>
    <Email />
  </Icon>
)

export const Default: Story = {
  render: Template,
}

export const Test: Story = {
  render: () => <Email focusable="true" className="test" />,
}
