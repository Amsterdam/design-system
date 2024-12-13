/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FileList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { FileInputWithFileList } from './FileInputWithFileList'

const meta = {
  title: 'Components/Forms/File List',
  component: FileList,
  args: {
    children: [
      <FileList.Item
        key="1"
        file={new File(['sample1'], 'sample1.txt', { type: 'text/plain', lastModified: Date.now() })}
      />,
      <FileList.Item
        key="2"
        file={new File(['sample2'], 'sample2.txt', { type: 'text/plain', lastModified: Date.now() })}
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
