/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Field, FileCard, FileInput, FileList, Label, Paragraph } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const emptiedRef = useRef<HTMLParagraphElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const [emptied, setEmptied] = useState(false)

  // A File Card only displays the address, so releasing it belongs to whoever creates it.
  // This runs for the previous set whenever the selection changes, and once more on unmount.
  useEffect(() => () => previewUrls.forEach((url) => url && URL.revokeObjectURL(url)), [previewUrls])

  const selectFiles = (selected: File[]) => {
    setFiles(selected)
    setPreviewUrls(selected.map((file) => (file.type.startsWith('image/') ? URL.createObjectURL(file) : '')))
  }

  const changeFiles = () => {
    setEmptied(false)
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

    // Commit the removal before moving focus, so focus does not land while the button it came from
    // is still in the tree.
    flushSync(() => {
      selectFiles(remaining)
      setEmptied(remaining.length === 0)
    })

    // A File Card moves focus to the delete button beside it, but it cannot know where focus should go
    // when the last file leaves and the list disappears with it. Focus goes to this page’s own account
    // of what happened, rather than back to the field, whose wording the browser generates and does not
    // everywhere keep up to date for a screen reader.
    if (remaining.length === 0) {
      emptiedRef.current?.focus()
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
      {emptied && (
        <Paragraph ref={emptiedRef} tabIndex={-1}>
          Alle bijlagen zijn verwijderd.
        </Paragraph>
      )}
    </>
  )
}
