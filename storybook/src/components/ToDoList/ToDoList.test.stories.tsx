/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToDoList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as toDoListMeta } from './ToDoList.stories'

const meta = {
  ...toDoListMeta,
  title: 'To Do List',
} satisfies Meta<typeof ToDoList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => renderComponentVariants(ToDoList, { args }),
  tags: ['!dev', '!autodocs'],
}
