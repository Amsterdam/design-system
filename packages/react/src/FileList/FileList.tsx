/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef, useEffect } from 'react'

import { FileListItem } from './FileListItem'

export type FileListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const FileListRoot = forwardRef(
  ({ children, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLUListElement>) => {
    useEffect(() => {
      console.warn(
        '@deprecated File List has been replaced. Wrap File Cards in an Unordered List without markers instead.',
      )
    }, [])

    return (
      <ul {...restProps} className={clsx('ams-file-list', className)} ref={ref}>
        {children}
      </ul>
    )
  },
)

FileListRoot.displayName = 'FileList'

/**
 * Groups files in a list, so assistive technology can announce how many there are.
 *
 * @deprecated Wrap File Cards in an Unordered List without markers instead. Will be removed on or after 2027-04-01.
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-list--docs File List docs at Amsterdam Design System}
 */
export const FileList = Object.assign(FileListRoot, {
  Item: FileListItem,
})
