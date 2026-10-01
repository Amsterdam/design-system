/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef, useCallback, useRef } from 'react'

import type { FormatFileMetadataText } from './formatFileMetadataText'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { focusAdjacentDeleteButton } from './focusAdjacentDeleteButton'
import { formatFileMetadataTextNl } from './formatFileMetadataText'

export type FileCardProps = {
  /**
   * A slot for action buttons or links, e.g. to download or edit the file.
   * A delete button is built-in and added when an `onDelete` handler is provided.
   */
  readonly actions?: ReactNode
  /**
   * The visible label of the delete button.
   * The name of the file is appended for screen readers.
   * @default 'Verwijder'
   */
  readonly deleteButtonLabel?: string
  /**
   * Returns the text with the type and size of the file, displayed below its name.
   * Formatters for Dutch and English are available as exports.
   * @default formatFileMetadataTextNl
   */
  readonly formatMetadataText?: FormatFileMetadataText
  /** The name of the file. */
  readonly name: string
  /**
   * A function to run when the user removes the file.
   * Adds a delete button after any custom actions.
   */
  readonly onDelete?: () => void
  /** The address of an image to display instead of the generic document icon. */
  readonly previewUrl?: string
  /** The size of the file in bytes. */
  readonly size?: number
  /** The media type of the file, e.g. `application/pdf`. */
  readonly type?: string
} & Readonly<HTMLAttributes<HTMLDivElement>>

/**
 * Presents one file with its type and size, and the actions available for it.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-card--docs File Card docs at Amsterdam Design System}
 */
export const FileCard = forwardRef(
  (
    {
      actions,
      className,
      deleteButtonLabel = 'Verwijder',
      formatMetadataText = formatFileMetadataTextNl,
      name,
      onDelete,
      previewUrl,
      size,
      type,
      ...restProps
    }: FileCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const metadata = formatMetadataText({ size, type })
    const deleteButton = useRef<HTMLButtonElement | null>(null)

    // Use a ref callback so React can move focus at the moment it removes the focused delete button.
    const setDeleteButton = useCallback((button: HTMLButtonElement | null) => {
      if (button === null && deleteButton.current && deleteButton.current === document.activeElement) {
        focusAdjacentDeleteButton(deleteButton.current)
      }

      deleteButton.current = button
    }, [])

    return (
      <div {...restProps} className={clsx('ams-file-card', className)} ref={ref}>
        <div className="ams-file-card__preview">
          {previewUrl ? (
            <img alt="" className="ams-file-card__image" src={previewUrl} />
          ) : (
            <Icon size="heading-3" square svg={DocumentIcon} />
          )}
        </div>
        <div className="ams-file-card__info">
          <div className="ams-file-card__name">{name}</div>
          {metadata && <div className="ams-file-card__metadata">{metadata}</div>}
        </div>
        {(actions || onDelete) && (
          <div className="ams-file-card__actions">
            {actions}
            {onDelete && (
              <Button
                className="ams-file-card__delete-button"
                onClick={onDelete}
                ref={setDeleteButton}
                variant="tertiary"
              >
                {deleteButtonLabel}
                <span className="ams-visually-hidden">{` ${name}`}</span>
              </Button>
            )}
          </div>
        )}
      </div>
    )
  },
)

FileCard.displayName = 'FileCard'
