/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Breadcrumb } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/breadcrumb/breadcrumb.scss'

const meta = {
  title: 'Breadcrumb',
  component: Breadcrumb,
  args: {},
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const BreadcrumbStory: Story = {
  render: (args) => (
    <Breadcrumb>
      <Breadcrumb.item>home</Breadcrumb.item>
      <Breadcrumb.item>route 1239487289757347</Breadcrumb.item>
      <Breadcrumb.item>route 24532945329</Breadcrumb.item>
      <Breadcrumb.item>route 3</Breadcrumb.item>
      <Breadcrumb.item>route 5</Breadcrumb.item>
    </Breadcrumb>
  ),
}
