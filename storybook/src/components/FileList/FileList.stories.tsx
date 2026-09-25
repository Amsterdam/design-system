/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FileCard, FileList } from '@amsterdam/design-system-react/src'

import { FileInputWithFileList } from './FileInputWithFileList'

const meta = {
  title: 'Components/Forms/File List',
  component: FileList,
  args: {
    children: [
      <FileList.Item key="1">
        <FileCard name="paspoort.pdf" onDelete={() => {}} size={1536000} type="application/pdf" />
      </FileList.Item>,
      <FileList.Item key="2">
        <FileCard name="loonstrook.pdf" onDelete={() => {}} size={248000} type="application/pdf" />
      </FileList.Item>,
    ],
  },
  subcomponents: {
    'FileList.Item': FileList.Item,
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
      codePanel: false,
    },
  },
  render: () => <FileInputWithFileList />,
}
