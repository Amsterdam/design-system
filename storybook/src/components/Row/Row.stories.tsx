/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Row } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Row',
  component: Row,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof Row>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
