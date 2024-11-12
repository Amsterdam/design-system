/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { FileInputWithFileList } from './FileInputWithFileList'

const sampleDataTransfer = new DataTransfer()
sampleDataTransfer.items.add(new File(['sample1'], 'sample1.txt', { type: 'text/plain', lastModified: Date.now() }))
sampleDataTransfer.items.add(new File(['sample2'], 'sample2.txt', { type: 'text/plain', lastModified: Date.now() }))
const sampleFiles = sampleDataTransfer.files

const meta = {
  title: 'Components/Forms/File List',
  component: FileList,
  args: {
    files: sampleFiles,
  },
  argTypes: {
    files: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  render: () => <FileInputWithFileList />,
}
