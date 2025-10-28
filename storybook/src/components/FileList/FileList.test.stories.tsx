/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileList } from '@amsterdam/design-system-react/src'
import { expect, fn } from 'storybook/test'

import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

const testFn = fn()

export const Test: Story = {
  args: {
    children: [
      <FileList.Item
        data-testid="file-item"
        file={new File(['sample1'], 'sample1.txt', { lastModified: Date.now(), type: 'text/plain' })}
        key="1"
        onDelete={() => testFn()}
      />,
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'))
    await expect(testFn).toHaveBeenCalled()
  },
  tags: ['!dev', '!autodocs'],
}
