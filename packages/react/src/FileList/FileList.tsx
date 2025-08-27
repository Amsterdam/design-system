/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { FileListItem } from './FileListItem'

export type FileListProps = PropsWithChildren<HTMLAttributes<HTMLUListElement>>

export const FileListRoot = forwardRef(
  ({ children, className, ...restProps }: FileListProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ul {...restProps} className={clsx('ams-file-list', className)} ref={ref}>
      {children}
    </ul>
  ),
)

FileListRoot.displayName = 'FileList'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-file-list--docs File List docs at Amsterdam Design System}
 */
export const FileList = Object.assign(FileListRoot, {
  Item: FileListItem,
})
