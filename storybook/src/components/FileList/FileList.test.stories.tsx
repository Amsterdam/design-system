/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileList } from '@amsterdam/design-system-react/src'
import { expect, fn } from 'storybook/test'

import { renderComponentVariants } from '../../utils/renderComponentVariants'
import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

const testFn = fn()

export const Test: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'))
    await expect(testFn).toHaveBeenCalled()
  },
  render: (args) => renderComponentVariants(FileList, { args }),
  tags: ['!dev', '!autodocs'],
}
