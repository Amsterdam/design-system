/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'FileList',
  component: FileList,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
