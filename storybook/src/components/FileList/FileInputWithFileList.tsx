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

  return (
    <>
      <FileInput multiple ref={inputRef} onChange={handleFilesChange} />
      {files && <FileList files={files} />}
    </>
  )
}
