/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link } from '@amsterdam/design-system-react/src'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

const meta = {
  title: 'Link',
  id: 'link',
  component: Link,
} satisfies Meta<typeof Link>

export default meta

type Story = StoryObj<typeof meta>

const Template: StoryFn<typeof Link> = (args) => <Link href="#" {...args} />

export const Default: Story = {
  render: Template,
  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  },
}
