/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Field, FileCard, FileInput, FileList, Label } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'

export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  // A File Card only displays the address, so releasing it belongs to whoever creates it.
  // This runs for the previous set whenever the selection changes, and once more on unmount.
  useEffect(() => () => previewUrls.forEach((url) => url && URL.revokeObjectURL(url)), [previewUrls])

  const selectFiles = (selected: File[]) => {
    setFiles(selected)
    setPreviewUrls(selected.map((file) => (file.type.startsWith('image/') ? URL.createObjectURL(file) : '')))
  }

  const changeFiles = () => {
    selectFiles(Array.from(inputRef.current?.files ?? []))
  }

  const removeFile = (index: number) => {
    const remaining = files.filter((_, position) => position !== index)

    // Keep the field in step with the list, so it never states a selection this page no longer shows.
    if (inputRef.current) {
      const selection = new DataTransfer()

      remaining.forEach((file) => selection.items.add(file))
      inputRef.current.files = selection.files
    }

    selectFiles(remaining)

    // A File Card moves focus to the delete button beside it, but it cannot know where focus should go
    // when the last file leaves and the list disappears with it. Here it returns to the File Input.
    if (remaining.length === 0) {
      inputRef.current?.focus()
    }
  }

  return (
    <>
      <Field>
        <Label htmlFor="file-input">Bijlagen</Label>
        <FileInput id="file-input" multiple onChange={changeFiles} ref={inputRef} />
      </Field>
      {files.length > 0 && (
        <FileList>
          {files.map((file, index) => (
            <FileList.Item key={file.name}>
              <FileCard
                name={file.name}
                onDelete={() => removeFile(index)}
                previewUrl={previewUrls[index] || undefined}
                size={file.size}
                type={file.type}
              />
            </FileList.Item>
          ))}
        </FileList>
      )}
    </>
  )
}
