/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Field, FileCard, FileInput, FileList, Label, Paragraph } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

type Attachment = {
  file: File
  id: string
  previewUrl: string
}

// Two files chosen at once can share a name, so the list needs a key of its own.
// Reusing the name would let React confuse one row with another and undo the focus move below.
const toAttachments = (files: File[]): Attachment[] =>
  files.map((file) => ({
    file,
    id: crypto.randomUUID(),
    previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
  }))

export const FileInputWithFileList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const emptiedRef = useRef<HTMLParagraphElement>(null)
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [emptied, setEmptied] = useState(false)

  // A File Card only displays the address, so releasing it belongs to whoever creates it.
  // This runs for the previous set whenever the selection changes, and once more on unmount.
  useEffect(
    () => () => attachments.forEach(({ previewUrl }) => previewUrl && URL.revokeObjectURL(previewUrl)),
    [attachments],
  )

  const changeFiles = () => {
    setEmptied(false)
    setAttachments(toAttachments(Array.from(inputRef.current?.files ?? [])))
  }

  const removeFile = (id: string) => {
    const remaining = attachments.filter((attachment) => attachment.id !== id)

    // Keep the field in step with the list, so it never states a selection this page no longer shows.
    if (inputRef.current) {
      const selection = new DataTransfer()

      remaining.forEach(({ file }) => selection.items.add(file))
      inputRef.current.files = selection.files
    }

    // Commit the removal before moving focus, so focus does not land while the button it came from
    // is still in the tree.
    flushSync(() => {
      setAttachments(remaining)
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
      {attachments.length > 0 && (
        <FileList>
          {attachments.map(({ file, id, previewUrl }) => (
            <FileList.Item key={id}>
              <FileCard
                name={file.name}
                onDelete={() => removeFile(id)}
                previewUrl={previewUrl || undefined}
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
