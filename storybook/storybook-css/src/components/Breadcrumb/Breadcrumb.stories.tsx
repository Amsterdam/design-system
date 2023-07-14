/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Breadcrumb } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/breadcrumb/breadcrumb.scss'

const meta = {
  title: 'CSS Components/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const BreadcrumbStory: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="/some-url.com">home</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 2</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 3</Breadcrumb.Item>
      <Breadcrumb.Item href="/some-url.com">path 5</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        // This is formatting seems to be needed to format a multiline string code block.
        code: `
<nav class="amsterdam-breadcrumb">
  <ol class="amsterdam-breadcrumb-list">
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">home</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 1</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 2</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 3</a>
    </li>
    <li class="amsterdam-breadcrumb-item">
      <a class="amsterdam-breadcrumb-link" href="/some-url.com">path 5</a>
    </li>
  </ol>
</nav>`,
      },
    },
  },
}
