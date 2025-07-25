/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileList } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { FileInputWithFileList } from './FileInputWithFileList'

const meta = {
  title: 'Components/Forms/File List',
  component: FileList,
  args: {
    children: [
      <FileList.Item
        file={new File(['sample1'], 'sample1.txt', { lastModified: Date.now(), type: 'text/plain' })}
        key="1"
        onDelete={() => {}}
      />,
      <FileList.Item
        file={new File(['sample2'], 'sample2.txt', { lastModified: Date.now(), type: 'text/plain' })}
        key="2"
        onDelete={() => {}}
      />,
    ],
  },
} satisfies Meta<typeof FileList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInput: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none',
      },
    },
  },
  render: () => <FileInputWithFileList />,
}
