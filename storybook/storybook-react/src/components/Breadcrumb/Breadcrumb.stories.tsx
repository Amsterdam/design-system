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
      <Breadcrumb.Item href="#">home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">path 1</Breadcrumb.Item>
      <Breadcrumb.Item href="#">path 2</Breadcrumb.Item>
      <Breadcrumb.Item href="#">path 3</Breadcrumb.Item>
      <Breadcrumb.Item href="#">path 5</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="#">home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">path 1</Breadcrumb.Item>
  <Breadcrumb.Item href="#">path 2</Breadcrumb.Item>
  <Breadcrumb.Item href="#">path 3</Breadcrumb.Item>
  <Breadcrumb.Item href="#">path 5</Breadcrumb.Item>
</Breadcrumb>
        `,
      },
    },
  },
}
