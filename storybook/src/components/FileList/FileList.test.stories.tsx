/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileList } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { expect } from 'storybook/test'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as fileListMeta } from './FileList.stories'

const meta = {
  ...fileListMeta,
  title: 'Components/Forms/File List',
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: <FileList.Item file={new File(['sample1'], 'sample1.txt', { type: 'text/plain' })} />,
  },
  render: (args, context) => renderComponentVariants(FileList, { args }, context),
  tags: ['!dev', '!autodocs', '!manifest'],
}

const removableFiles = [
  new File(['first'], 'first.txt', { type: 'text/plain' }),
  new File(['second'], 'second.txt', { type: 'text/plain' }),
  new File(['third'], 'third.txt', { type: 'text/plain' }),
]

const RemovableFileList = () => {
  const [remainingFiles, setRemainingFiles] = useState(removableFiles)

  return (
    <FileList>
      {remainingFiles.map((file) => (
        <FileList.Item
          file={file}
          key={file.name}
          onDelete={() => setRemainingFiles((current) => current.filter(({ name }) => name !== file.name))}
        />
      ))}
    </FileList>
  )
}

export const FocusAfterDelete: Story = {
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder second.txt' }))

    await expect(canvas.queryByText('second.txt')).not.toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Verwijder third.txt' })).toHaveFocus()

    await userEvent.click(canvas.getByRole('button', { name: 'Verwijder third.txt' }))

    await expect(canvas.queryByText('third.txt')).not.toBeInTheDocument()
    await expect(canvas.getByRole('button', { name: 'Verwijder first.txt' })).toHaveFocus()
  },
  render: () => <RemovableFileList />,
  tags: ['!dev', '!autodocs', '!manifest'],
}
