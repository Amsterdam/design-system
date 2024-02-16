/**
 * @license EUPL-1.2+
 * Copyright (c) 2024 Gemeente Amsterdam
 */

import { Column, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const ThreeBoxes = Array.from(Array(3).keys()).map((i) => (
  <Paragraph className="amsterdam-docs-pink-box" key={i}>
    {i + 1}
  </Paragraph>
))

const meta = {
  title: 'Layout/Column',
  component: Column,
  args: {
    children: ThreeBoxes,
    gap: 'md',
  },
  argTypes: {
    children: {
      table: { disable: true },
    },
    gap: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Column>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
