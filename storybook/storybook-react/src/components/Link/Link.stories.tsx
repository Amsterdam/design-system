/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Link } from '@amsterdam/design-system-react/src'
import { Meta, StoryFn } from '@storybook/react'

import '@amsterdam/design-system-css/src/link/link.scss'
import '@amsterdam/design-system-css/src/icon/icon.scss'

export default {
  title: 'Link',
  id: 'link',
  component: Link,
} as Meta<typeof Link>

const Template: StoryFn<typeof Link> = (args) => <Link href="#" {...args} />

export const Default = {
  render: Template,

  args: {
    children: 'Jouw typograaf biedt mij zulke exquise schreven!',
  },
}
