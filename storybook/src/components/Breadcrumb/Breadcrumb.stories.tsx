/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Breadcrumb } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Nieuws</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Kennisgevingen en bekendmakingen</Breadcrumb.Item>
    </Breadcrumb>
  ),
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Nieuws</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Kennisgevingen en bekendmakingen</Breadcrumb.Item>
</Breadcrumb>
        `,
      },
    },
  },
}
