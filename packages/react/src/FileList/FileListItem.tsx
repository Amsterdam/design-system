/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect, useRef } from 'react'

import { FileCard } from '../FileCard/FileCard'

export type FileListItemProps = {
  /**
   * The file to display. Shows its name, type, and size.
   * @deprecated Render a File Card as a child instead. Will be removed on or after 2027-04-01.
   */
  readonly file?: File
  /**
   * A function to run when the user removes the file. Adds a delete button.
   * @deprecated Pass this to the File Card rendered as a child instead. Will be removed on or after 2027-04-01.
   */
  readonly onDelete?: () => void
} & Readonly<PropsWithChildren<HTMLAttributes<HTMLLIElement>>>

/**
 * One file within a File List.
 *
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-list--docs File List docs at Amsterdam Design System}
 */
export const FileListItem = forwardRef(
  ({ children, className, file, onDelete, ...restProps }: FileListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
    // The deprecation warnings fire once with the values passed on mount, so we read them through a ref to keep the effect dependency-free.
    const initialPropsRef = useRef({ children, file, onDelete })

    useEffect(() => {
      const initialProps = initialPropsRef.current
      const usesDeprecatedProps = initialProps.file !== undefined || initialProps.onDelete !== undefined

      if (usesDeprecatedProps) {
        console.warn(
          '@deprecated The `file` and `onDelete` props of File List Item have been replaced. Render a File Card as a child instead.',
        )
      }

      if (usesDeprecatedProps && initialProps.children !== undefined) {
        console.warn('The children of File List Item take precedence over its deprecated `file` and `onDelete` props.')
      }
    }, [])

    return (
      <li {...restProps} className={clsx('ams-file-list__item', className)} ref={ref}>
        {children ?? (file && <FileCard name={file.name} onDelete={onDelete} size={file.size} type={file.type} />)}
      </li>
    )
  },
)

FileListItem.displayName = 'FileList.Item'
