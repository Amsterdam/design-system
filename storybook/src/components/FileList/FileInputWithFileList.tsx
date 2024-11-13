import { FileInput, FileList } from '@amsterdam/design-system-react'
import { useRef, useState } from 'react'

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
