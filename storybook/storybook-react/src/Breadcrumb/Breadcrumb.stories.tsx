/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Breadcrumb } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const BreadcrumbStory: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Path 1</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Path 2</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Path 3</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Path 5</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Path 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Path 2</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Path 3</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Path 5</Breadcrumb.Item>
</Breadcrumb>
        `,
      },
    },
  },
}
