/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, MouseEvent } from 'react'

import { DocumentIcon } from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { FormatFileDetailsText } from './formatFileDetailsText'

import { Button } from '../Button'
import { Icon } from '../Icon'
import { focusAdjacentDeleteButton } from './focusAdjacentDeleteButton'
import { formatFileDetailsTextNl } from './formatFileDetailsText'

export type FileCardProps = {
  /**
   * The visible label of the delete button. The name of the file is appended for screen readers.
   * @default 'Verwijder'
   */
  readonly deleteButtonLabel?: string
  /**
   * Returns the text with the type and size of the file, displayed below its name.
   * Formatters for all tested locales are available as exports.
   * @default formatFileDetailsTextNl
   */
  readonly formatDetailsText?: FormatFileDetailsText
  /** The name of the file. */
  readonly name: string
  /** A function to run when the user removes the file. Adds a delete button. */
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
      className,
      deleteButtonLabel = 'Verwijder',
      formatDetailsText = formatFileDetailsTextNl,
      name,
      onDelete,
      previewUrl,
      size,
      type,
      ...restProps
    }: FileCardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const details = formatDetailsText({ size, type })

    const deleteFile = (event: MouseEvent<HTMLButtonElement>) => {
      focusAdjacentDeleteButton(event.currentTarget)
      onDelete?.()
    }

    return (
      <div {...restProps} className={clsx('ams-file-card', className)} ref={ref}>
        <div className="ams-file-card__preview">
          {previewUrl ? <img alt="" src={previewUrl} /> : <Icon size="heading-3" square svg={DocumentIcon} />}
        </div>
        <div className="ams-file-card__info">
          <span className="ams-file-card__name">{name}</span>
          {details && <span className="ams-file-card__details">{details}</span>}
        </div>
        {onDelete && (
          <div className="ams-file-card__actions">
            <Button onClick={deleteFile} variant="tertiary">
              {deleteButtonLabel}
              <span className="ams-visually-hidden">{` ${name}`}</span>
            </Button>
          </div>
        )}
      </div>
    )
  },
)

FileCard.displayName = 'FileCard'
