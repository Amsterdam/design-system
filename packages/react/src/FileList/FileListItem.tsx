/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { FileCard } from '../FileCard/FileCard'

export type FileListItemProps = {
  /** The file to display. Shows its name, type, and size, and a thumbnail for images. */
  readonly file: File
  /** A function to run when the user removes the file. Adds a delete button. */
  readonly onDelete?: () => void
} & Readonly<HTMLAttributes<HTMLLIElement>>

/**
 * Represents a single uploaded file within a File List, with its details and an optional delete action.
 *
 * @deprecated Use a File Card inside an Unordered List item instead. Will be removed on or after 2027-04-01.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-list--docs File List docs at Amsterdam Design System}
 */
export const FileListItem = forwardRef(
  ({ className, file, onDelete, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => (
    <li {...restProps} className={clsx('ams-file-list__item', className)} ref={ref}>
      <FileCard name={file.name} onDelete={onDelete} size={file.size} type={file.type} />
    </li>
  ),
)

FileListItem.displayName = 'FileList.Item'
