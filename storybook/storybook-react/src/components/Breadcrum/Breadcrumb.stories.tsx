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
    <Breadcrumb {...args}>
      <Breadcrumb.item href="/some-url.com">home</Breadcrumb.item>
      <Breadcrumb.item href="/some-url.com">path 1</Breadcrumb.item>
      <Breadcrumb.item href="/some-url.com">path 2</Breadcrumb.item>
      <Breadcrumb.item href="/some-url.com">path 3</Breadcrumb.item>
      <Breadcrumb.item href="/some-url.com">path 5</Breadcrumb.item>
    </Breadcrumb>
  ),
}
