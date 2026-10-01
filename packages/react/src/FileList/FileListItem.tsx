/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '../Button'
import { focusAdjacentDeleteButton } from '../FileCard/focusAdjacentDeleteButton'
import { formatFileDetailsTextNl } from '../FileCard/formatFileDetailsText'
import { Icon } from '../Icon'

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
  ({ className, file, onDelete, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    const details = formatFileDetailsTextNl({ size: file.size, type: file.type })
    const [previewUrl, setPreviewUrl] = useState<string>()
    const deleteButton = useRef<HTMLButtonElement | null>(null)

    useEffect(() => {
      const nextPreviewUrl = file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined

      setPreviewUrl(nextPreviewUrl)

      return () => {
        if (nextPreviewUrl) {
          URL.revokeObjectURL(nextPreviewUrl)
        }
      }
    }, [file])

    const setDeleteButton = useCallback((button: HTMLButtonElement | null) => {
      if (button === null && deleteButton.current && deleteButton.current === document.activeElement) {
        focusAdjacentDeleteButton(deleteButton.current)
      }

      deleteButton.current = button
    }, [])

    return (
      <li {...restProps} className={clsx('ams-file-list__item', className)} ref={ref}>
        <div className="ams-file-list__item-preview">
          {previewUrl ? <img alt="" src={previewUrl} /> : <Icon size="heading-3" square svg={DocumentIcon} />}
        </div>
        <div className="ams-file-list__item-info">
          {file.name}
          {details && <div className="ams-file-input__item-details">{details}</div>}
        </div>
        {onDelete && (
          <div>
            <Button
              className="ams-file-list__delete-button"
              onClick={onDelete}
              ref={setDeleteButton}
              variant="tertiary"
            >
              Verwijder
              <span className="ams-visually-hidden">{` ${file.name}`}</span>
            </Button>
          </div>
        )}
      </li>
    )
  },
)

FileListItem.displayName = 'FileList.Item'
