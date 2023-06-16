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

const Template: StoryFn<typeof Icon> = () => <Icon svg={Email} />

export const Default: Story = {
  render: Template,
}
