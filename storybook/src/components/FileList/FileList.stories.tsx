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
  parameters: {
    docs: {
      source: {
        code: `
  export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFilesChange = () => {
    if (inputRef.current) {
      setFiles(inputRef.current.files)
    }
  }

  const handleFileRemove = (index: number) => {
    if (files) {
      const newFiles = new DataTransfer()
      Array.from(files).forEach((file, i) => {
        if (i !== index) newFiles.items.add(file)
      })
      if (inputRef.current) {
        inputRef.current.files = newFiles.files
      }
      setFiles(newFiles.files)
    }
  }

  return (
    <>
      <FileInput multiple ref={inputRef} onChange={handleFilesChange} />
      {files && <FileList files={files} onDelete={handleFileRemove} />}
    </>
  )
}
`,
      },
    },
  },
  render: () => <FileInputWithFileList />,
}
