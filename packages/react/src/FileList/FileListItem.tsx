/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes } from 'react'

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Button } from '../Button/Button'
import { focusAdjacentDeleteButton } from '../FileCard/focusAdjacentDeleteButton'
import { formatFileMetadataTextNl } from '../FileCard/formatFileMetadataText'
import { Icon } from '../Icon/Icon'

export type FileListItemProps = {
  /** The file to display. Shows its name, type, and size, and a thumbnail for images. */
  readonly file: File
  /** A function to run when the user removes the file. Adds a delete button. */
  readonly onDelete?: () => void
} & Readonly<HTMLAttributes<HTMLLIElement>>

/**
 * Represents a single uploaded file within a File List, with its details and an optional delete action.
 *
 * @deprecated Use a File Card inside an Unordered List item instead. Will be removed on or after 2027-06-01.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-list--docs File List docs at Amsterdam Design System}
 */
export const FileListItem = forwardRef(
  ({ className, file, onDelete, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    const metadata = formatFileMetadataTextNl({ size: file.size, type: file.type })
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

    // React runs this cleanup before it removes the list item, so the list is still there to search.
    useLayoutEffect(
      () => () => {
        const button = deleteButton.current

        if (button && button === document.activeElement) {
          focusAdjacentDeleteButton(button)
        }
      },
      [],
    )

    return (
      <li {...restProps} className={clsx('ams-file-list__item', className)} ref={ref}>
        <div className="ams-file-list__item-preview">
          {previewUrl ? <img alt="" src={previewUrl} /> : <Icon size="heading-3" square svg={DocumentIcon} />}
        </div>
        <div className="ams-file-list__item-info">
          {file.name}
          {metadata && <div className="ams-file-input__item-details">{metadata}</div>}
        </div>
        {onDelete && (
          <div>
            <Button data-file-card-delete-button onClick={onDelete} ref={deleteButton} variant="tertiary">
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
