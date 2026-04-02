/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToDoList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'To Do List',
  component: ToDoList,
  args: {
    children: 'Nieuw component',
  },
} satisfies Meta<typeof ToDoList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
